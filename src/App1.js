import Table from "./components/Table";
function App()
{
    const data=[
        {
            name: "Pramod",
            City: "Geeta Colony"
        },
        {
            name: "Shasank",
            City: "Mangal Bazar"
        },
        {
            name: "Himanshu",
            City: "Bhogal"
        },
        {
            name: "Basant",
            City: "Laxmi Nagar"
        }
    ];
    
    
    return (
            <Table item={data}/>
    );
}

export default App;