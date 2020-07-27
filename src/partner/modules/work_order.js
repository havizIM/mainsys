const administratorUI = ((SET) => {
    
    let count = 0

    return {
        resetCount: () => {
            count = 0
        },
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
                                                    <h4 class="font-bold">${SET.replaceNull(data.building.partner.partner_name)}</h4>

                                                    <p><b><i class="mdi mdi-album"></i> Building :</b> <a href="#/building/${data.building.id}">${data.building.building_code} - ${data.building.building_name}</a></p>
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
                                                <td style="width: 80%">${data.equipment !== null ? `<a href="#/equipment/${data.equipment.id}">${data.equipment.sku} - ${data.equipment.equipment_name}</a>` : '-'}</td>
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
                            <div class="row">
                                <div class="col-md-6 text-left">
                                    ${data.schedule.length === 0 ? `
                                        <button data-id="${data.id}" data-name="${data.wo_number}" class="btn btn-danger btn-delete">Delete</button>
                                        <a href="#/work_order/edit/${data.id}" class="btn btn-success">Edit</a>
                                    ` : ''}
                                </div>
                                <div class="col-md-6 text-right">
                                    ${data.schedule.length === 0 ? `
                                    <b class="text-danger">Waiting Proccess <i class="fa fa-clock"></i></b>` : `<a href="#/corrective_schedule/${data.schedule[0].id}"><b class="text-success pr-2"><i class="fa fa-check"></i> Schedule Created</b></a>`}
                                    <button id="print" class="btn btn-default btn-outline" type="button"> <span><i class="fa fa-print"></i> Print</span> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            `

            $('#main_content').html(html)
        },
        renderRow: () => {
            count += 1

            let html = `
                <tr id="row_${count}">
                    <td>
                        <div class="form-group">
                            <input type="file" class="dropify" name="photo[${count}]" id="photo_${count}" required>
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-md btn-remove" type="button" data-id="${count}" data-remove="true"><i class="fa fa-times"></i></button>
                    </td>
                </tr>
            `

            $('#t_add_photo').append(html)
            $('#photo_'+count).dropify()
        }
    }
})(settingController)

const administratorController = ((SET, DT, UI, LU) => {

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
                    url: `${SET.apiURL()}work_order/${id}`,
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

    const _addRow = () => {
        $('.btn_add_row').click(function () {
            UI.renderRow()
        })
    }

    const _removeRow = () => {
        $('#t_add_photo').on('click', '.btn-remove', function () {
            let id = $(this).data('id')
            let remove = $(this).data('remove')

            if (remove === true && id) {
                $('#row_' + id).remove();
            }
        });
    }

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

    const _detailObserver = (TOKEN, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('.btn-delete')[0])) {
                _openDelete('#main_content')
                _submitDelete(TOKEN, data => {
                    location.hash = '#/work_order'
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

    const _onChangeBuilding = TOKEN => {
        $('#building_id').on('select2:select', function (e) {
            let data = e.params.data

            $('#equipment_id').select2({
                ajax: {
                    url: `${SET.apiURL()}equipment`,
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
                            building: data.id
                        }

                        return query;
                    },
                    processResults: function (data) {
                        let filtered = [];

                        data.results.map(v => {
                            let obj = {
                                id: v.id,
                                text: `${v.sku} / ${v.equipment_name}`,
                            }

                            filtered.push(obj)
                        })

                        return {
                            results: filtered
                        };
                    }
                }
            })

            $("#equipment_id").val('').trigger('change');
            $('#equipment_id').removeAttr('disabled')
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
                building_id: 'required',
                date: 'required',
                description: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}work_order`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#add_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/work_order/${res.results.id}`
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
                columnDefs: [
                    {
                        targets: [5],
                        orderable: false
                    },
                    {
                        targets: [5],
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
                        {
                            text: '<i class="fa fa-plus"></i>',
                            action: function (e, dt, node, config) {
                                location.hash = '#/work_order/add'
                            },
                            titleAttr: 'Add'
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
                            if (row.building !== null) {
                                return `
                                    <a href="#/building/${row.building.id}">${row.building.building_name}</a>
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
                                    <a href="#/equipment/${row.equipment.id}">${row.equipment.sku} / ${row.equipment.equipment_name}</a>
                                `
                            } else {
                                return '-'
                            }
                        }
                    },
                    {
                        data: "active",
                        render: function (data, type, row) {
                            if (row.schedule.length === 0) {
                                return `<b class="text-danger">Open</b>`
                            } else if (row.schedule.length === 1 && row.schedule[0].corrective_report.length === 0) {
                                return `<b class="text-warning">Proccess</b>`
                            } else if (row.schedule.length === 1 && row.schedule[0].corrective_report.length === 1) {
                                return `<b class="text-success">Close</b>`
                            }
                        }
                    },
                    {
                        data: "id",
                        render: function (data, type, row) {
                            if (row.schedule.length === 0) {
                                return `
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="ti-settings"></i>
                                        </button>
                                        <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                            <a class="dropdown-item btn-delete" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.wo_number}"><i class="fa fa-trash"></i> Delete</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#/work_order/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                        </div>
                                    </div>
                                `;
                            } else {
                                return ''
                            }
                            
                        }
                    }
                ],
                order: [[0, "asc"]]
            })

            DT.dtFilter(table)
            DT.dtFilterRange(table, 1)

            _openDelete('#t_work_order')
            _submitDelete(TOKEN, data => {
                table.ajax.reload()
                $('#modal_delete').modal('hide')
            })
        },

        detail: (TOKEN, id) => {

            _fetchWorkOrder(TOKEN, id, data => {
                console.log(data)
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })

            _printAll()
        },

        add: TOKEN => {
            UI.resetCount()

            $('.dropify').dropify()

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

            $('#equipment_id').select2()

            _onChangeBuilding(TOKEN)
            _addRow()
            _removeRow()
            _submitAdd(TOKEN)
        }
    }
})(settingController, dtController, administratorUI, lookupController)

export default administratorController