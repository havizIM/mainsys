const buildingUI = ((SET) => {
    return {
        renderDetail: data => {
            let no = 1;

            let html = `
                <div class="row">
                    <div class="col-md-8">
                            <div class="p-20">
                                <fieldset>
                                    <legend><u>Information</u></legend>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Building Name</b></div>
                                                    <div>${SET.replaceNull(data.building_code)} / ${SET.replaceNull(data.building_name)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Address</b></div>
                                                    <div>${SET.replaceNull(data.address)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>City</b></div>
                                                    <div>${SET.replaceNull(data.city !== null ? data.city.city : '-')}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Province</b></div>
                                                    <div>${SET.replaceNull(data.province !== null ? data.province.province : '-')}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Type</b></div>
                                                    <div>${SET.replaceNull(data.type)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Email</b></div>
                                                    <div>${SET.replaceNull(data.email)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Phone</b></div>
                                                    <div>${SET.replaceNull(data.phone)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Fax</b></div>
                                                    <div>${SET.replaceNull(data.fax)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Location</b></div>
                                                    <div>${data.longitude !== null && data.latitude !== null ? `<a  target="__blank" href="https://www.google.com/maps/?q=${data.longitude},${data.latitude}">Open Maps <i class="fa fa-map"></i></a>` : '-'}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Other Information</b></div>
                                                    <div>${SET.replaceNull(data.other_information)}</div>
                                                </div>
                                            </div>
                                        </p>
                                    </fieldset>
                            </div>
                    </div>

                    <div class="col-md-4">
                        <img src="${SET.baseURL()}assets/images/building.svg" class="img-fluid mt-5">
                    </div>

                    <div class="col-md-12">
                        <div class="p-20">
                            <fieldset>
                                <legend><u>Schedules</u></legend>
                                <div id="calendar"></div>
                            </fieldset>
                        </div>
                    </div>

                </div>
            `

            $('#main_content').html(html)
        },
    }
})(settingController)

const buildingController = ((SET, DT, UI, LU) => {

    /* -------------------- DETAIL ACTION ----------------- */
    const _fetchBuilding = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}building/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _detailObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            let buildingSchedule = []

            data.schedules.forEach(v => {
                let bgClass;

                switch (v.type) {
                    case 'Preventive':
                        bgClass = 'bg-info'
                        break

                    case 'Corrective':
                        bgClass = 'bg-success'
                        break

                    case 'Checklist':
                        bgClass = 'bg-warning'
                        break
                }

                let obj = {
                    id: v.id,
                    title: v.type,
                    start: v.date + ' ' + v.time,
                    end: v.date + ' ' + v.time,
                    type: v.type,
                    className: bgClass
                }

                buildingSchedule.push(obj)
            })

            if (container.contains($('#calendar')[0])) {
                $('#calendar').fullCalendar({
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,basicWeek,basicDay'
                    },
                    defaultDate: moment().format("YYYY-MM-DD"),
                    editable: false,
                    eventLimit: true,
                    droppable: false,
                    allDay: true,
                    events: buildingSchedule,
                    eventClick: function (calEvent, jsEvent, view) {
                        let id = calEvent.id
                        let type = calEvent.type

                        switch (type) {
                            case 'Preventive':
                                location.hash = `#/preventive_schedule/${id}`
                                break

                            case 'Corrective':
                                location.hash = `#/corrective_schedule/${id}`
                                break

                            case 'Checklist':
                                location.hash = `#/checklist_schedule/${id}`
                                break
                        }

                    }
                });
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    return {

        detail: (TOKEN, id) => {

            _fetchBuilding(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })
        }
    }
})(settingController, dtController, buildingUI, lookupController)

export default buildingController