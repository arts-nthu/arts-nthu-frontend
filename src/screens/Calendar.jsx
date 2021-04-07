import React, { useEffect, useState } from 'react';
import Layout from '../common/Layout';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import { fetchExhibitions } from '../stores/exhibition';

function Calendar() {
    const [hasError, setErrors] = useState(false);
    const [exhibitions, setExhibitions] = useState([]);

    function rename(exhibitions) { // function to rename on button click
        let e
        e = exhibitions.map(function(obj) {
            obj['start'] = obj['start_date']; // Assign new key
            obj['end'] = obj['end_date']; // Assign new key
            delete obj['end_date']; // Delete old key
            return obj;
        });
        return e
    }

    async function fetchData() {
        const res = await fetchExhibitions(1, 9)
        res
          .json()
          .then(res => {
              
              let e = rename(res.data)
              
              setExhibitions(e)
          })
          .catch(err => setErrors(err));
    }

    
    useEffect(() => {
        fetchData();
    }, []);

    if(hasError) {
        return (
            <>
                <h1>Error</h1>
            </>
        )
    }
    return (
        <Layout>
            <div class="page-title container m-auto pt-5 pb-5">
                <div class="page-title-text" style={{top: "-30" + 'px'}}>
                    <div class="en">Calendar</div>
                    <div class="line">
                        <div class="box col-lg-5 col-sm-0"></div>
                        <div class="ch col-lg-2 col-sm-12">活動月曆</div>
                        <div class="box col-lg-5 col-sm-0"></div>
                    </div>
                    
                </div>
                <div className="calendar">
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        events={exhibitions}
                    />
                </div>
                
            </div>
        </Layout>
    )
}

export default Calendar;