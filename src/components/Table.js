function Table(props)
{
    return <>
    
        <table >
            <tr>
                <th>Name</th>
                <th>City</th>
            </tr>
            {props.item.map((data) =>
            <tr>
                <td>{data.name}</td>
                <td>{data.City}</td>
            </tr>
            )}
          
        </table>
    
    </>;
}

export default Table;