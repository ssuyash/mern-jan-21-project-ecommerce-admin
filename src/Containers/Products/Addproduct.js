import React, { useState } from 'react'
import Structure from '../../Components/Structure'
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import ImageUploader from 'react-images-upload';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



//draftToHtml(convertToRaw(editorState.getCurrentContent()))
export default function Addproduct(props) {
    const [description, setDescription] = useState(EditorState.createEmpty())
    const [pictures, setPictures] = useState([])

    const onDrop = picture => {
        setPictures([...pictures, picture]);
        console.log(pictures)
    };


    return (
        <Structure>

            <div className="row">
                <div className="col-md-12">
                    <p className="h3 text-center">Add New Product</p>
                </div>


                <div className="col-md-12 mt-5"></div>

                <div className="col-md-4">
                    <label className="">SKU</label>
                    <input type="text" className="form-control" placeholder="sku"></input>
                </div>
                <div className="col-md-4">
                    <label className="">Brand</label>

                    <select className="form-control">
                        <option value="">Apple</option>
                        <option value="">Samsung</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label className="">Category</label>

                    <select className="form-control">
                        <option value="">Electronics</option>
                        <option value="">Home Appliance</option>
                    </select>
                </div>



                <div className="col-md-12 mt-4">
                    <label className="">Item Title</label>

                    <input className="form-control" type="text"></input>
                </div>


                <div className="col-md-12 mt-4 ">
                    <label className="">Description</label>

                    <Editor
                        editorState={description}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName border"
                        editorClassName="editorClassName p-2"
                        onEditorStateChange={(e) => setDescription(e)}
                    />
                </div>


                <div className="col-md-12 mt-4"></div>

                <div className="col-md-4">
                    <label className="">Avl Qnty</label>
                    <input type="number" className="form-control" placeholder="sku"></input>
                </div>

                <div className="col-md-4">
                    <label className="">Price</label>
                    <input type="number" className="form-control" placeholder="sku"></input>
                </div>

                <div className="col-md-4">
                    <label className="">Sale Price</label>
                    <input type="number" className="form-control" placeholder="sku"></input>
                </div>

                <div className="col-md-12">
                    <ImageUploader
                       
                        withIcon={true}
                        onChange={onDrop}
                        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                        maxFileSize={5242880000}
                        withPreview={true}
                    />
                </div>


                <div className="col-md-12 text-right">
                    <button class="btn btn-outline-primarygi "> Save Product </button>
                </div>
            </div>

        </Structure>
    )
}
