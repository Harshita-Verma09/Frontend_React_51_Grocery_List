import React, { useState } from "react";

const Grocery = () => {
    const [add, setAdd] = useState("");
    const [show, setShow] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handleInputChange = (e) => setAdd(e.target.value);

    const handleAdd = () => {
        if (add.trim() !== "") {
            setShow([...show, add]);
            setAdd("");
        }
    };

    const handleDelete = (index) => {
        const updatedList = show.filter((_, i) => i !== index);
        setShow(updatedList);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(show[index]);
    };

    const handleSave = () => {
        const updatedList = [...show];
        updatedList[editIndex] = editValue;
        setShow(updatedList);
        setEditIndex(null);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4 text-gray-200">🛒 Grocery List</h1>

                {/* Input & Button */}
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Add grocery..."
                        value={add}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md"
                    >
                        Add
                    </button>
                </div>

                {/* Grocery List */}
                {show.length > 0 ? (
                    <ul className="space-y-3">
                        {show.map((item, index) => (
                            <li key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-md">
                                {editIndex === index ? (
                                    <div className="flex w-full gap-2">
                                        <input
                                            type="text"
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            className="w-full p-2 bg-gray-600 text-white rounded-md outline-none"
                                        />
                                        <button
                                            onClick={handleSave}
                                            className="bg-green-500 hover:bg-green-600 transition px-3 py-1 rounded-md"
                                        >
                                            Save
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <span className="text-lg">{item}</span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(index)}
                                                className="bg-yellow-500 hover:bg-yellow-600 transition px-3 py-1 rounded-md"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="bg-red-500 hover:bg-red-600 transition px-3 py-1 rounded-md"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-400 text-center">📝 Add grocery items to the list.</p>
                )}
            </div>
        </div>
    );
};

export default Grocery;
