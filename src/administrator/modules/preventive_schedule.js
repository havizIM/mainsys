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
                                            <div><b>Partner Name</b></div>
                                            <div><a href="#/partner/${data.building.partner.id}">${data.building.partner.partner_name}</a></div>
                                        </div>
                                    </div>
                                </p>
                                <p>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div><b>Building Name</b></div>
                                            <div><a href="#/partner/building/${data.building.id}">${data.building.building_code} - ${data.building.building_name}</a></div>
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
    const _openDelete = parent => {
        $(parent).on('click', '.btn-delete', function () {
            let id = $(this).data('id')
            let name = $(this).data('name')

            $('#delete_id').val(id)
            $('#delete_desc').text(name)

            $('#modal_delete').modal('show')
        })
    }

    const _submitDelete = (TOKEN, callback) => {
        $('#form_delete').on('submit', function (e) {
            e.preventDefault()

            let id = $('#delete_id').val()

            if (id === '') {
                toastr.error('Data cannot be proccessed', 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            } else {
                $.ajax({
                    url: `${SET.apiURL()}preventive_schedule/${id}`,
                    type: 'DELETE',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                        SET.contentLoader('.modal-content')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        callback(res)
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('.modal-content')
                    }
                })
            }
        })
    }

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

            if (container.contains($('.btn-delete')[0])) {
                _openDelete('#main_content')
                _submitDelete(TOKEN, data => {
                    location.hash = '#/administrator'
                })
            }

            if (container.contains($('#t_equipment')[0])) {

                $('#count_equipment').text(data.preventives.length)

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
                                    <a href="#/partner/equipment/${row.equipment.id}">${row.equipment.sku}</a>
                                `;
                            }
                        },
                        {
                            data: "equipment.equipment_name"
                        },
                        {
                            data: "equipment.category.category_name"
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
                                <a href="#/engineer/${row.engineer.id}">${row.engineer.full_name}</a>
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

    const _fetchEngineer = (TOKEN, callback) => {
        $.ajax({
            url: `${SET.apiURL()}engineer`,
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

    const _fetchEquipment = (TOKEN, callback) => {
        $.ajax({
            url: `${SET.apiURL()}equipment`,
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

    const _onChangePartner = TOKEN => {
        $('#partner_id').on('select2:select', function (e) {
            let data = e.params.data

            $('#building_id').select2({
                ajax: {
                    url: `${SET.apiURL()}building`,
                    dataType: 'JSON',
                    type: 'GET',
                    headers: {
                        "Authorization": "Bearer " + TOKEN,
                        "Content-Type": "application/json",
                    },
                    data: function (params) {
                        var query = {
                            search: params.term,
                            limit: 100,
                            partner: data.id
                        }

                        return query;
                    },
                    processResults: function (data) {
                        let filtered = [];

                        data.results.map(v => {
                            let obj = {
                                id: v.id,
                                text: `${v.building_code} / ${v.building_name}`,
                            }

                            filtered.push(obj)
                        })

                        return {
                            results: filtered
                        };
                    }
                }
            })

            $("#building_id").val('').trigger('change');
            $('#building_id').removeAttr('disabled')
        });
    }

    const _onChangeBuilding = callback => {
        $('#building_id').on('select2:select', function (e) {
            let data = e.params.data

            callback(data.id)
        });
    }

    const _submitAdd = TOKEN => {
        $('#form_add').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            rules: {
                partner_id: 'required',
                building_id: 'required',
                date: 'required',
                estimate: 'required',
                engineer: 'required',
                equipment: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}preventive_schedule`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: {
                        date: $('#date').val(),
                        time: $('#time').val(),
                        estimate: $('#estimate').val(),
                        building_id: $('#building_id').val(),
                        shift: $('#shift').val(),
                        description: $('#description').val(),
                        engineer: $('#engineer').val(),
                        equipment: $('#equipment').val(),
                    },
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/preventive_schedule/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#add_container')
                    }
                })
            }
        })
    }

    return {
        data: TOKEN => {
            const table = $('#t_preventive_schedule').DataTable({
                columnDefs: [
                    {
                        targets: [4],
                        orderable: false
                    },
                    {
                        targets: [4],
                        searchable: false
                    }
                ],
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
                            text: '<i class="fa fa-download"></i> ',
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
                        {
                            text: '<i class="fa fa-plus"></i>',
                            action: function (e, dt, node, config) {
                                location.hash = '#/preventive_schedule/add'
                            },
                            titleAttr: 'Add'
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
                                <a href="#/partner/building/${row.building.id}">${row.building.building_name}</a>
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
                    {
                        data: "id",
                        render: function (data, type, row) {
                            if(row.preventive_reports.length === 0){
                                return `
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="ti-settings"></i>
                                        </button>
                                        <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                            <a class="dropdown-item btn-delete" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.building.building_name} at ${row.date}"><i class="fa fa-trash"></i> Delete</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#/preventive_schedule/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                        </div>
                                    </div>
                                `;
                            } else {
                                return '-'
                            }
                        }
                    }
                ],
                order: [[1, "desc"]]
            })

            DT.dtFilter(table)
            DT.dtFilterRange(table, 1)

            _openDelete('#t_preventive_schedule')
            _submitDelete(TOKEN, data => {
                table.ajax.reload()
                $('#modal_delete').modal('hide')
            })

        },

        detail: (TOKEN, id) => {
            _fetchPreventiveSchedule(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })
        },

        add: TOKEN => {

            $('#partner_id').select2({
                ajax: {
                    url: `${SET.apiURL()}partner`,
                    dataType: 'JSON',
                    type: 'GET',
                    headers: {
                        "Authorization": "Bearer " + TOKEN,
                        "Content-Type": "application/json",
                    },
                    data: function (params) {
                        var query = {
                            search: params.term,
                            limit: 100
                        }

                        return query;
                    },
                    processResults: function (data) {
                        let filtered = [];

                        data.results.map(v => {
                            let obj = {
                                id: v.id,
                                text: `${v.partner_name}`,
                            }

                            filtered.push(obj)
                        })
                        return {
                            results: filtered
                        };
                    }

                }
            })

            $('#engineer').bootstrapDualListbox();
            var engineerSetting = $('#engineer').bootstrapDualListbox('getContainer');
            engineerSetting.find('.moveall i').removeClass().addClass('fa fa-angle-double-right').next().remove();
            engineerSetting.find('.removeall i').removeClass().addClass('fa fa-angle-double-left').next().remove()
            
            $('#equipment').bootstrapDualListbox();
            var equipmentSetting = $('#equipment').bootstrapDualListbox('getContainer');
            equipmentSetting.find('.moveall i').removeClass().addClass('fa fa-angle-double-right').next().remove();
            equipmentSetting.find('.removeall i').removeClass().addClass('fa fa-angle-double-left').next().remove()

            _fetchEngineer(TOKEN, data => {
                let html = '';

                if(data.length !== 0){
                    data.map(v => {
                        html += `
                            <option value="${v.id}">${v.full_name}</option>
                        `
                    }).join('')

                    ;

                } else {
                    html += ''
                }

                $('#engineer').html(html)
                $('#engineer').bootstrapDualListbox('refresh', true);
            })

            _onChangePartner(TOKEN)

            _onChangeBuilding(id => {
                _fetchEquipment(TOKEN, data => {
                    let html = ''

                    if (data.length !== 0) {
                        let filtered = data.filter(y => y.building.id === id);

                        filtered.forEach(v => {
                            html += `
                                <option value="${v.id}">${v.sku} / ${v.equipment_name} / ${v.category.category_name}</option>
                            `
                        });

                    } else {
                        html += ''
                    }

                    $('#equipment').html(html)
                    $('#equipment').bootstrapDualListbox('refresh', true);
                })
            })

            _submitAdd(TOKEN)
        }
    }
})(settingController, dtController, preventiveScheduleUI, lookupController)

export default preventiveScheduleController