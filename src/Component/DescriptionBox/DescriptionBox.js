import React from "react";
import "./DescriptionBox.css";


const DescriptionBox = () => {



    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews</div>
            </div>
            <div className="descriptionbox-description">
                <p>The core layer is where a binary PDF is parsed and interpreted. This layer is the foundation for all subsequent layers. It is not documented here because using it directly is considered an advanced usage and the API is likely to change. For an example of using the core layer see the PDF Object Browser.
                </p>
                <p>The viewer is built on the display layer and is the UI for PDF viewer in Firefox and the other browser extensions within the project. It can be a good starting point for building your own viewer. However, we do ask if you plan to embed the viewer in your own site, that it not just be an unmodified version. Please re-skin it or build upon it.
                </p>
            </div>

        </div>
    )
}

export default DescriptionBox;