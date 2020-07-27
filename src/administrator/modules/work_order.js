const administratorUI = ((SET) => {
    return {
        renderDetail: data => {
            let no = 1;

            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-body printableArea">
                            <h3><b>WORK ORDER</b> <span class="pull-right">#${data.wo_number}</span></h3>
                            <hr>
                            <div class="row">
                                <table class="w-100">
                                    <tr>
                                        <td class="w-50">
                                            <address>
                                                <img src="${SET.baseURL()}assets/images/logo-rsi.png" style="width: 20%" class="mb-3" />
                                                <p class="text-muted m-l-5"><b>PT. Rezeki Surya Intimakmur</b>
                                                    <br/>Jl. Cipete Raya No. 25C,
                                                    <br/> Cilandak, Cipete Selatan, Jakarta Selatan, DKI Jakarta 12410, Indonesia,
                                                    <br/> Hp. 08987748441,
                                                    <br/> Telp/Fax. 021-7504143</p>
                                            </address>
                                        </td>
                                        <td class="w-50 text-right">
                                            ${data.building !== null ? `
                                                <address>
                                                    <h3>From</h3>
                                                    <h4 class="font-bold"><a href="#/partner/${data.building.partner.id}">${SET.replaceNull(data.building.partner.partner_name)}</a></h4>

                                                    <p><b><i class="mdi mdi-album"></i> Building :</b> <a href="#/partner/building/${data.building.id}">${data.building.building_code} - ${data.building.building_name}</a></p>
                                                    <p>${data.building.address}</p>
                                                    <p><b>Phone</b> : ${data.building.phone}, <b>Fax</b> : ${data.building.fax !== null ? data.building.fax : ''}</p>
                                                </address>
                                            ` : ''}
                                        </td>
                                    </tr>
                                </table>
                                <div class="col-md-12">
                                    <div class="table-responsive mt-5" style="clear: both;">
                                        <table class="table table-hover">
                                            <tr>
                                                <th style="width: 20%">Equipment</th>
                                                <td style="width: 80%">${data.equipment !== null ? `<a href="#/partner/equipment/${data.equipment.id}">${data.equipment.sku} - ${data.equipment.equipment_name}</a>` : '-'}</td>
                                            </tr>
                                            <tr>
                                                <th>Description</th>
                                                <td>${data.description}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <hr>
                                    <table class="w-100">
                                        <tr>
                                            <td class="w-50">
                                                <i>${data.created_by !== null ? `Created at ${data.created_by}` : ''}</i>
                                                <br/>
                                                <i>${data.created_at !== null ? `Created at ${data.created_at}` : ''}</i>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h4><i class="fa fa-paperclip m-r-10 m-b-10"></i> Photos <span>(${data.photos.length})</span></h4>
                            <div class="row">
                                ${data.photos.length !== 0 ? data.photos.map(v => {
                                    return `
                                        <div class="col-md-2">
                                            <a target="__blank" href="${v.photo === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}work_order/file/${data.id}/${v.photo}`}"> <img class="img-thumbnail img-responsive" alt="attachment" src="${v.photo === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}work_order/file/${data.id}/${v.photo}`}"> </a>
                                        </div>
                                    `
                                }) : '<h5 class="pl-4">Photos not available</h5>'}
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="text-right">
                                ${data.schedule.length === 0 ? `
                                <a class="btn btn-success" href="#/work_order/${data.id}/create_schedule"><i class="fa fa-calendar"></i> Create Schedule </a>` : `<a href="#/corrective_schedule/${data.schedule[0].id}"><b class="text-success pr-2"><i class="fa fa-check"></i> Schedule Created</b></a>`}
                                <button id="print" class="btn btn-default btn-outline" type="button"> <span><i class="fa fa-print"></i> Print</span> </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            `

            $('#main_content').html(html)
        },

        renderCreateSchedule: (data, engineer) => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <form id="form_add">
                            <div class="row">
                                <div class="col-md-8">
                                    <fieldset>
                                        <legend><u>Schedule</u></legend>

                                        <div class="form-group">
                                            <label for="date">Date</label>
                                            <input type="date" class="form-control" id="date" name="date">
                                        </div>
                                        <div class="form-group">
                                            <label for="time">Time</label>
                                            <input type="time" class="form-control" id="time" name="time">
                                        </div>
                                        <div class="form-group">
                                            <label for="estimate">Estimate</label>
                                            <input type="text" class="form-control" id="estimate" name="estimate">
                                        </div>
                                        <div class="form-group">
                                            <label for="shift">Shift</label>
                                            <input type="text" class="form-control" id="shift" name="shift">
                                        </div>
                                        <div class="form-group">
                                            <label for="description">Description</label>
                                            <textarea class="form-control" id="description" name="description"></textarea>
                                        </div>
                                    </fieldset>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body bg-info text-white">
                                            <fieldset>
                                                <legend><u>Work Order Detail</u></legend>
                                                <p>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div><b>Work Order Number</b></div>
                                                            <div><a class="text-white" href="#/work_order/${data.id}">${SET.replaceNull(data.wo_number)}</a></div>
                                                            <input type="hidden" name="work_order_id" id="work_order_id" value="${data.id}">
                                                        </div>
                                                    </div>
                                                </p>
                                                <p>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div><b>Partner</b></div>
                                                            <div>${SET.replaceNull(data.building.partner.partner_name)}</div>
                                                        </div>
                                                    </div>
                                                </p>
                                                <p>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div><b>Building</b></div>
                                                            <div>${SET.replaceNull(`${data.building.building_code} / ${data.building.building_name}`)}</div>
                                                            <input type="hidden" name="building_id" id="building_id" value="${data.building.id}">
                                                        </div>
                                                    </div>
                                                </p>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <fieldset>
                                        <legend><u>Create Teams</u></legend>

                                        <select id="engineer" name="engineer" multiple="multiple" size="10" class="duallistbox" required>
                                            ${engineer.length !== 0 ? engineer.map(v => {
                                                return `<option value="${v.id}">${v.full_name}</option>`
                                            }) : ''}
                                        </select>
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <div class="text-right mt-3">
                                        <a href="#/work_order/${data.id}" class="btn btn-danger">Cancel</a>
                                        <button type="submit" class="btn btn-info">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        }
    }
})(settingController)

const administratorController = ((SET, DT, UI, LU) => {

    /* -------------------- DETAIL ACTION ----------------- */
    const _fetchWorkOrder = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}work_order/${id}`,
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


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _createScheduleObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('.duallistbox')[0])) {
                $('.duallistbox').bootstrapDualListbox();

                var customSettings = $('.duallistbox').bootstrapDualListbox('getContainer');
                customSettings.find('.moveall i').removeClass().addClass('fa fa-angle-double-right').next().remove();
                customSettings.find('.removeall i').removeClass().addClass('fa fa-angle-double-left').next().remove();
            }

            if(container.contains($('#form_add')[0])){
                _submitAdd(TOKEN)
            }


            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
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
                date: 'required',
                estimate: 'required',
                engineer: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}corrective_schedule`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: {
                        date: $('#date').val(),
                        time: $('#time').val(),
                        estimate: $('#estimate').val(),
                        building_id: $('#building_id').val(),
                        work_order_id: $('#work_order_id').val(),
                        shift: $('#shift').val(),
                        description: $('#description').val(),
                        engineer: $('#engineer').val(),
                    },
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/corrective_schedule/${res.results.id}`
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

    const _printAll = () => {
        $('#detail_container').on('click', '#print', function () {
            var mode = 'iframe'; //popup
            var close = mode == "popup";
            var options = {
                mode: mode,
                popClose: close
            };
            $("div.printableArea").printArea(options);
        });
    }

    return {
        data: TOKEN => {
            const table = $('#t_work_order').DataTable({
                // columnDefs: [
                //     {
                //         targets: [6],
                //         orderable: false
                //     },
                //     {
                //         targets: [6],
                //         searchable: false
                //     }
                // ],
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
                                    filename: 'DATA_WORK_ORDER',
                                    title: 'Data Work Order',
                                },
                                {
                                    extend: 'excelHtml5',
                                    text: 'Excel',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_WORK_ORDER',
                                    title: 'Data Work Order'
                                },
                                {
                                    extend: 'csvHtml5',
                                    text: 'CSV',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_WORK_ORDER',
                                    title: 'Data Work Order'
                                },
                                {
                                    extend: 'print',
                                    text: 'Print',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_WORK_ORDER',
                                    title: '<h4>Data Work Order</h4>'
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
                    url: `${SET.apiURL()}work_order`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Content-Type", 'application/json')
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        let open = res.results.filter(v => v.schedule.length === 0).length;
                        let proccess = res.results.filter(v => v.schedule.length === 1 && v.schedule[0].corrective_report.length === 0).length;
                        let close = res.results.filter(v => v.schedule.length === 1 && v.schedule[0].corrective_report.length === 1).length;

                        $('#count_open').text(SET.positiveCurrency(open))
                        $('#count_proccess').text(SET.positiveCurrency(proccess))
                        $('#count_close').text(SET.positiveCurrency(close))

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
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/work_order/${row.id}">${row.wo_number}</a>
                            `;
                        }
                    },
                    {
                        data: "date",
                    },
                    {
                        data: "building",
                        render: function (data, type, row) {
                            if(row.building !== null) {
                                return `
                                    ${row.building.building_name}
                                `
                            } else {
                                return '-'
                            }
                        }
                    },
                    {
                        data: "equipment",
                        render: function (data, type, row) {
                            if (row.equipment !== null) {
                                return `
                                    ${row.equipment.equipment_name}
                                `
                            } else {
                                return '-'
                            }
                        }
                    },
                    {
                        data: "active",
                        render: function (data, type, row) {
                            if(row.schedule.length === 0){
                                return `<b class="text-danger">Open</b>`
                            } else if (row.schedule.length === 1 && row.schedule[0].corrective_report.length === 0) {
                                return `<b class="text-warning">Proccess</b>`
                            } else if (row.schedule.length === 1 && row.schedule[0].corrective_report.length === 1) {
                                return `<b class="text-success">Close</b>`
                            }
                        }
                    },
                    // {
                    //     data: "id",
                    //     render: function (data, type, row) {
                    //         return `
                    //             <div class="btn-group">
                    //                 <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    //                     <i class="ti-settings"></i>
                    //                 </button>
                    //                 <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                    //                     <a class="dropdown-item btn-delete" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.full_name}"><i class="fa fa-trash"></i> Delete</a>
                    //                     <div class="dropdown-divider"></div>
                    //                     <a class="dropdown-item" href="#/administrator/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                    //                 </div>
                    //             </div>
                    //         `;
                    //     }
                    // }
                ],
                order: [[1, "desc"]]
            })

            DT.dtFilter(table)
            DT.dtFilterRange(table, 1)

        },

        detail: (TOKEN, id) => {
            _fetchWorkOrder(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })

            _printAll()
        },

        createSchedule: (TOKEN, id) => {
            _fetchWorkOrder(TOKEN, id, data => {
                _createScheduleObserver(TOKEN, id, data)

                if(data.schedule.length === 0){
                    _fetchEngineer(TOKEN, engineer => {
                        UI.renderCreateSchedule(data, engineer)
                    })
                } else {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                }
            })
        }
    }
})(settingController, dtController, administratorUI, lookupController)

export default administratorController