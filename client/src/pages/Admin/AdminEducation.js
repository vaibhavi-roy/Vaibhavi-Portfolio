import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Form, message } from 'antd';
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";


function AdminEducation() {
    const dispatch = useDispatch();// object of useDispatch
    const { portfolioData } = useSelector((state) => state.root);
    const { education } = portfolioData;
    const [showAddEditModal, setShowAddEditModal] = React.useState(false);
    const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
    const [type, setType] = React.useState("add");
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (selectedItemForEdit) {
                response = await axios.post("/api/portfolio/update-education", {
                    ...values,
                    _id: selectedItemForEdit._id,
                });
            } else {
                response = await axios.post("/api/portfolio/add-education", values);
            }

            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
                form.resetFields();
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };
    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post('/api/portfolio/delete-education', {
                _id: item._id,
            })
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                dispatch(HideLoading());
                dispatch(ReloadData(true));
            }
            else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }
    const handleCloseAddEditModal = () => {
        setShowAddEditModal(false);
    };
    return (
        <div>
            <div className="flex justify-end">
                <button
                    className="bg-primary px-5 py-2 text-white mt-5 mb-5"
                    onClick={() => {
                        setSelectedItemForEdit(null);
                        setShowAddEditModal(true);
                    }}
                >
                    Add Education
                </button>
                <br />
            </div>
            <div className='grid grid-cols-3 gap-5 sm:grid-cols-1'>
                {education.map((education) => (
                    <div className='shadow border border-gray-400 p-5'>
                        <h1 className='text-secondary text-xl font-bold flex flex-col'>{education.institute}</h1>
                        <hr />
                        <h1>{education.title}</h1>
                        <h1>Period:{education.period}</h1>
                        <h1>Score:{education.score}</h1>
                        <br />

                        <div className='flex justify-end gap-5 mt-5'>
                            <button className='bg-red-600 text-white px-5 py-2 ' onClick={() => {
                                onDelete(education);
                            }}>Delete</button>
                            <button className='bg-primary text-white px-5 py-2' onClick={() => {
                                setSelectedItemForEdit(education);
                                setShowAddEditModal(true);
                                setType("edit");
                            }}>Edit</button>

                        </div>
                    </div>
                ))}
            </div>

            {(type === "add" || selectedItemForEdit) && (<Modal
                open={showAddEditModal}
                title={selectedItemForEdit ? "Edit Education" : "Add Education"}
                footer={null}
                onCancel={() => {
                    setShowAddEditModal(false);
                    setSelectedItemForEdit(null);
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={selectedItemForEdit || {}}
                >
                    <Form.Item name="institute" label="Institute">
                        <input placeholder="Institute" />
                    </Form.Item>
                    <Form.Item name="title" label="Title">
                        <input placeholder="Title" />
                    </Form.Item>
                    <Form.Item name="period" label="Period">
                        <input placeholder="Period" />
                    </Form.Item>
                    <Form.Item name="score" label="Score">
                        <input placeholder="Description" />
                    </Form.Item>
                    <div className="flex justify-end">
                        <button
                            className="border-primary text-primary px-5 py-2"
                            onClick={() => {
                                setShowAddEditModal(false);
                                setSelectedItemForEdit(null);
                            }}
                        >
                            Cancel
                        </button>
                        <button className="bg-primary text-white px-5 py-2">
                            {selectedItemForEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>
            </Modal>)}
        </div>
    )
}

export default AdminEducation