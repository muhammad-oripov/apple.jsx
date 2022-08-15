import React from "react";

function Boxes({products}) {
    let {product,decs} = products
    return (
        <div className="big_box">
            <div className="box">
                <div className="top">
                    <h1>{product}</h1>
                    <h3>{decs}</h3>
                </div>
                <div className="bottom">
                    <img src="https://prostoreshop.ru/wp-content/uploads/2021/12/smartfon-apple-iphone-13-pro-128gb-grafitovyj-mlw13ru-a-1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Boxes;