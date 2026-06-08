import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { IoCalendarSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Dashboard = () =>{
    return(
        <>
        <Navbar />
        <section className="dashboard-page">
            <div className="dashboard-header">
                <h1>My Events Dashboard</h1>
                <p>
                    Manage your events and check-in attendees
                </p>
            </div>

            <div className="empty-state">
            <span style={{ backgroundColor: "#8D8A8A", padding:"10px", marginBlockStart:"-20px", borderRadius:"30%", display:"inline-block", color:"#fff", marginBottom:"12px" }}>
               <IoCalendarSharp />
            </span>

            <h3>No events created </h3>

            <p>
                Create your first event to get started
            </p>

            <button>
                Start Creating →
            </button>
            </div>
        

        </section>

        <Footer />

        </>
        
    );
};

export default Dashboard;