const preventiveScheduleUI = ((SET) => {
    return {
        renderDetail: data => {
            let no = 1;

            let html = `
                <div class="row">
                    <div class="col-md-6">
                        <div class="p-20">
                            <fieldset>
                                <legend><u>Schedule Information</u></legend>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div><b>Date</b></div>
                                                <div>${SET.replaceNull(data.date)}</div>
                                            </div>
                                            <div class="col-md-6">
                                                <div><b>Time</b></div>
                                                <div>${SET.replaceNull(data.time)}</div>
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div><b>Estimate</b></div>
                                                <div>${SET.replaceNull(data.estimate)}</div>
                                            </div>
                                            <div class="col-md-6">
                                                <div><b>Shift</b></div>
                                                <div>${SET.replaceNull(data.shift)}</div>
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div><b>Description</b></div>
                                                <div>${SET.replaceNull(data.description)}</div>
                                            </div>
                                        </div>
                                    </p>
                                </fieldset>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="p-20">
                            <fieldset>
                                <legend><u>Building</u></legend>
                                <p>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div><b>Building Name</b></div>
                                            <div><a href="#/building/${data.building.id}">${data.building.building_code} - ${data.building.building_name}</a></div>
                                        </div>
                                    </div>
                                </p>
                                <p>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div><b>Address</b></div>
                                            <div>${SET.replaceNull(data.building.address)}</div>
                                        </div>
                                    </div>
                                </p>
                                <p>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div><b>Phone</b></div>
                                                <div>${SET.replaceNull(data.building.phone)}</div>
                                            </div>
                                            <div class="col-md-6">
                                                <div><b>Fax</b></div>
                                                <div>${SET.replaceNull(data.building.fax)}</div>
                                            </div>
                                        </div>
                                    </p>


                            </fieldset>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#equipment" role="tab"><span class="hidden-sm-up"><i class="ti-wallet"></i></span> <span class="hidden-xs-down">Equipment</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#engineer" role="tab"><span class="hidden-sm-up"><i class="ti-info"></i></span> <span class="hidden-xs-down">Engineer</span></a> </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active p-20" id="equipment" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Equipment</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_equipment">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_equipment" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>SKU</th>
                                                        <th>Equipment Name</th>
                                                        <th>Category</th>
                                                        <th>Report</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane p-20" id="engineer" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Engineer</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_engineer">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_engineer" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Full Name</th>
                                                        <th>Address</th>
                                                        <th>Phone</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },
    }
})(settingController)

const preventiveScheduleController = ((SET, DT, UI, LU) => {

    /* -------------------- DETAIL ACTION ----------------- */
    const _fetchPreventiveSchedule = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}preventive_schedule/${id}`,
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

            if (container.contains($('#t_equipment')[0])) {

                $('#count_equipment').text(data.preventives.length)
                
                const schedule = data;
                const report = data.preventive_reports;

                const table = $('#t_equipment').DataTable({
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'><'col-md-6'>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    data: data.preventives,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                    <a href="#/equipment/${row.equipment.id}">${row.equipment.sku}</a>
                                `;
                            }
                        },
                        {
                            data: "equipment.equipment_name"
                        },
                        {
                            data: "equipment.category.category_name"
                        },
                        {
                            data: "id",
                            render: function (data, type, row) {
                                let preventive_report = report.filter(v => v.equipment_id === row.equipment.id).length;

                                if(preventive_report === 0){
                                    return `
                                        <a class="btn btn-info" href="#/preventive_schedule/${schedule.id}/equipment/${row.equipment.id}/create_report">Create Report <i class="fa fa-file"></i></a>
                                    `
                                } else {
                                    return '<div class="text-success">Report Created <i class="fa fa-check"></i></div>'
                                }
                            }
                        },
                    ],
                    order: [[0, "asc"]]
                })
            }

            if (container.contains($('#t_engineer')[0])) {

                $('#count_engineer').text(data.teams.length)

                const table = $('#t_engineer').DataTable({
                    autoWidth: true,
                    responsive: false,
                    scrollX: true,
                    scrollY: 300,
                    processing: false,
                    // select: {
                    //     style: "multiple",
                    //     selector: "td:first-child"
                    // },
                    language: SET.dtLanguage(),
                    dom: "<'row mt-2 mb-2'<'col-md-6'><'col-md-6'>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                    keys: { columns: [1, 2] },
                    pageLength: 50,
                    data: data.teams,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                ${row.engineer.full_name}
                            `;
                            }
                        },
                        {
                            data: "engineer.address"
                        },
                        {
                            data: "engineer.phone"
                        },
                    ],
                    order: [[0, "asc"]]
                })
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
        data: TOKEN => {
            const table = $('#t_preventive_schedule').DataTable({
                autoWidth: true,
                responsive: false,
                scrollX: true,
                scrollY: 300,
                processing: false,
                // select: {
                //     style: "multiple",
                //     selector: "td:first-child"
                // },
                language: SET.dtLanguage(),
                dom: "<'row mt-2 mb-2'<'col-md-6'B><'col-md-6'f>><t><'row'<'col-md-6'i><'col-md-6'p>>",
                keys: { columns: [1, 2] },
                pageLength: 50,
                buttons: {
                    dom: {
                        button: {
                            tag: 'button',
                            className: 'btn btn-md btn-primary my-action'
                        }
                    },
                    buttons: [
                        {
                            extend: 'collection',
                            text: '<i class="fa fa-download"></div> ',
                            titleAttr: 'Export Data',
                            buttons: [
                                {
                                    extend: 'pdfHtml5',
                                    text: 'PDF',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_PREVENTIVE_SCHEDULE',
                                    title: 'Data Preventive Schedule',
                                },
                                {
                                    extend: 'excelHtml5',
                                    text: 'Excel',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_PREVENTIVE_SCHEDULE',
                                    title: 'Data Preventive Schedule'
                                },
                                {
                                    extend: 'csvHtml5',
                                    text: 'CSV',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_PREVENTIVE_SCHEDULE',
                                    title: 'Data Preventive Schedule'
                                },
                                {
                                    extend: 'print',
                                    text: 'Print',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_PREVENTIVE_SCHEDULE',
                                    title: '<h4>Data Preventive Schedule</h4>'
                                },
                            ]
                        },
                        {
                            extend: 'colvis',
                            text: '<i class="fa fa-eye"></i>',
                            columns: [1, 2, 3],
                            titleAttr: 'Hide Coloum'
                        },
                        {
                            text: '<i class="fa fa-spinner"></i>',
                            action: function (e, dt, node, config) {
                                dt.ajax.reload()
                            },
                            titleAttr: 'Refresh'
                        },
                        {
                            text: '<i class="fa fa-calendar"></i>',
                            action: function (e, dt, node, config) {
                                $('#modal_range').modal('show')
                            },
                            titleAttr: 'Search Range'
                        },
                        {
                            text: '<i class="fa fa-search"></i>',
                            action: function (e, dt, node, config) {
                                $('#modal_search').modal('show')
                            },
                            titleAttr: 'Search'
                        },
                    ]
                },
                ajax: {
                    url: `${SET.apiURL()}preventive_schedule`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Content-Type", 'application/json')
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        let preventiveSchedule = []

                        res.results.forEach(v => {
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
                                title: v.building.building_name,
                                start: v.date + ' ' + v.time,
                                end: v.date + ' ' + v.time,
                                className: bgClass
                            }

                            preventiveSchedule.push(obj)
                        })

                        $('#count_schedule').text(res.results.length)

                        $('#preventive_calendar').fullCalendar({
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
                            events: preventiveSchedule,
                            eventClick: function (calEvent, jsEvent, view) {
                                let id = calEvent.id
                                // let description = calEvent.title
                                // let start_date = calEvent.start._i
                                // let end_date = calEvent.end === null ? calEvent.start._i : calEvent.end._i

                                location.hash = `#/preventive_schedule/${id}`
                            }
                        });

                        return res.results
                    },
                    statusCode: {
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
                    error: err => {

                    }
                },
                columns: [
                    {
                        data: "building",
                        render: function (data, type, row) {
                            return `
                                <a href="#/building/${row.building.id}">${row.building.building_name}</a>
                            `;
                        }
                    },
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/preventive_schedule/${row.id}">${row.date}</a>
                            `;
                        }
                    },
                    {
                        data: "time",
                    },
                    {
                        data: "estimate",
                    },
                ],
                order: [[1, "desc"]]
            })



            DT.dtFilter(table)
            DT.dtFilterRange(table, 1)

        },

        detail: (TOKEN, id) => {

            _fetchPreventiveSchedule(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })
        }
    }
})(settingController, dtController, preventiveScheduleUI, lookupController)

export default preventiveScheduleController