import React from 'react';

function List(props) {
    return <div>
        <ol>
            {
                props.data.map(function (item) {
                    return <li>
                        {item}
                    </li>
                })}
        </ol>
    </div>;
}

export default List;
