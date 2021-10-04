// This is our main focus section. SERVICES section. in this section we will show all the services our institution can provide
import React from 'react';
import './Services.css'
import { Container, Row } from 'react-bootstrap';
import AdmissionDb from '../../Hooks/Admission';
import HscDb from '../../Hooks/useHscDb';
import SscDb from '../../Hooks/useSscDb';
import Service from '../Service/Service';
const Services = () => {
    const [sscServices] = SscDb();
    const [hscServices] = HscDb();
    const [admissionServices] = AdmissionDb();

    return (
        <div className="my-5 services-container">
            <Row>
                {
                    sscServices.map(service => <Service service={service} key={service.id}><h1 className="text-center service-section">S S C Section</h1></Service>)
                }
            </Row>
            <div className="my-5">
            </div>
            <Row>
                {
                    hscServices.map(service => <Service service={service} key={service.id}><h1 className="text-center service-section">H S C Section</h1></Service>)
                }
            </Row>
            <div className="my-5">
            </div>
            <Row>
                {
                    admissionServices.map(service => <Service service={service} key={service.id}><h1 className="text-center service-section">Admission Section</h1></Service>)
                }
            </Row>
        </div>


    );
};

export default Services;