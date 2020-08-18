import React from 'react';
// List can be resused so we make it functional

function List(props) {
    return <div>
        <ol>
            { // To write Javascript in btn HTML then we write in "{  }"
                props.data.map(function (item) {
                    return <li>
                        {item}
                    </li>
                })
            }
        </ol>
    </div>;
}

export default List;
