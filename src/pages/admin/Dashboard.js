const { default: Header } = require("@/components/Header");

function Dashboard(){
    return(
        <div>
            <Header title="DASHBOARD" subtitle={"Welcome to ypur dashboard"}/>
        </div>
    );
}
export default Dashboard;