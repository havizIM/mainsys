const administratorUI = ((SET) => {
    return {
        renderDetail: data => {
            let html = `
                <div class="row">
                    <div class="col-md-8">
                        
                            <div class="p-20">
                                <fieldset>
                                    <legend><u>Information</u></legend>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Full Name</b></div>
                                                    <div>${SET.replaceNull(data.full_name)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Level</b></div>
                                                    <div>${SET.replaceNull(data.level)}</div>
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
                                                    <div><b>Phone</b></div>
                                                    <div>${SET.replaceNull(data.phone)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Email</b></div>
                                                    <div>${SET.replaceNull(data.user.email)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Other Information</b></div>
                                                    <div>${SET.replaceNull(data.other_information)}</div>
                                                </div>
                                            </div>
                                        </p>
                                    </fieldset>

                                    <fieldset>
                                        <legend><u>Account</u></legend>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Username</b></div>
                                                    <div>${SET.replaceNull(data.user.username)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Roles</b></div>
                                                    <div>${SET.replaceNull(data.user.roles)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Status</b></div>
                                                    <div>${data.user.active === 'Y' ? '<b class="text-success">Active</b>' : '<b class="text-danger">Inactive</b>'}</div>
                                                </div>
                                            </div>
                                        </p>
                                    </fieldset>

                                
                            </div>

                        
                    </div>

                    <div class="col-md-4">
                        <p class="p-20">
                            <label>Photo</label>
                            <img src="${data.photo === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}administrator/file/${data.photo}`}" class="img-fluid" alt="">
                        </p>
                        <div class="form-group mt-5">
                            <a href="#/administrator/edit/${data.id}" class="btn btn-md btn-block btn-success">Edit</a>
                            <button class="btn btn-md btn-block btn-danger btn-delete" data-id="${data.id}" data-name="${data.full_name}" type="button">Delete</button>
                        </div>
                    </div>
                </div>
            `

            $('#main_content').html(html)
        },
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
                    url: `${SET.apiURL()}administrator/${id}`,
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
                full_name: 'required',
                phone: 'required',
                email: 'required',
                address: 'required',
                city_id: 'required',
                province_id: 'required',
                username: 'required',
                active: 'required',
                level: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}administrator`,
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
                        location.hash = `#/administrator/${res.results.id}`
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

    /* -------------------- DETAIL ACTION ----------------- */
    const _fetchAdministrator = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}administrator/${id}`,
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

    return {
        data: TOKEN => {
            const table = $('#t_administrator').DataTable({
                columnDefs: [
                    {
                        targets: [6],
                        orderable: false
                    },
                    {
                        targets: [6],
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
                                        columns: [0, 1, 2, 3, 4, 5]
                                    },
                                    filename: 'DATA_ADMINISTRATOR',
                                    title: 'Data Administrator',
                                },
                                {
                                    extend: 'excelHtml5',
                                    text: 'Excel',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3, 4, 5]
                                    },
                                    filename: 'DATA_ADMINISTRATOR',
                                    title: 'Data Administrator'
                                },
                                {
                                    extend: 'csvHtml5',
                                    text: 'CSV',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3, 4, 5]
                                    },
                                    filename: 'DATA_ADMINISTRATOR',
                                    title: 'Data Administrator'
                                },
                                {
                                    extend: 'print',
                                    text: 'Print',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3, 4, 5]
                                    },
                                    filename: 'DATA_ADMINISTRATOR',
                                    title: '<h4>Data Administrator</h4>'
                                },
                            ]
                        },
                        {
                            extend: 'colvis',
                            text: '<i class="fa fa-eye"></i>',
                            columns: [1, 2, 3, 4],
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
                            text: '<i class="fa fa-search"></i>',
                            action: function (e, dt, node, config) {
                                $('#modal_search').modal('show')
                            },
                            titleAttr: 'Search'
                        },
                        {
                            text: '<i class="fa fa-plus"></i>',
                            action: function (e, dt, node, config) {
                                location.hash = '#/administrator/add'
                            },
                            titleAttr: 'Add'
                        },
                    ]
                },
                ajax: {
                    url: `${SET.apiURL()}administrator`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Content-Type", 'application/json')
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        let active = res.results.filter(v => v.user.active === 'Y').length;
                        let inactive = res.results.filter(v => v.user.active === 'N').length;

                        $('#count_active').text(SET.positiveCurrency(active))
                        $('#count_inactive').text(SET.positiveCurrency(inactive))

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
                                <a href="#/administrator/${row.id}">${row.full_name}</a>
                            `;
                        }
                    },
                    {
                        data: "address",
                        render: function (data, type, row) {
                            return `
                                ${row.address}, ${row.city.city}, ${row.province.province}
                            `;
                        }
                    },
                    {
                        data: "phone"
                    },
                    {
                        data: "user.email"
                    },
                    {
                        data: "level"
                    },
                    {
                        data: "active",
                        render: function (data, type, row) {
                            if (row.user.active === 'Y') {
                                return `<b class="text-success">Active</b>`
                            } else {
                                return `<b class="text-danger">Inactive</b>`
                            }
                        }
                    },
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <div class="btn-group">
                                    <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ti-settings"></i>
                                    </button>
                                    <div class="dropdown-menu animated flipInY" x-placement="bottom-start" style="position: absolute; transform: translate3d(-33px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                                        <a class="dropdown-item btn-delete" href="javascript:void(0)" id="btn_delete" data-id="${row.id}" data-name="${row.full_name}"><i class="fa fa-trash"></i> Delete</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#/administrator/edit/${row.id}"><i class="fa fa-edit"></i> Edit</a>
                                    </div>
                                </div>
                            `;
                        }
                    }
                ],
                order: [[0, "asc"]]
            })

            DT.dtFilter(table)
            _openDelete('#t_administrator')
            _submitDelete(TOKEN, data => {
                table.ajax.reload()
                $('#modal_delete').modal('hide')
            })
        },

        add: TOKEN => {
            $('.dropify').dropify();

            $('#city_id').select2({
                dropdownParent: $('.container-fluid'),
                ajax: {
                    url: `${SET.apiURL()}city`,
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
                        }

                        return query;
                    },
                    processResults: function (data) {
                        let filtered = [];

                        data.results.map(v => {
                            let obj = {
                                id: v.id,
                                text: v.city
                            }

                            filtered.push(obj)
                        })

                        return {
                            results: filtered
                        };
                    },
                    cache: true
                }
            });

            $('#province_id').select2({
                dropdownParent: $('.container-fluid'),
                ajax: {
                    url: `${SET.apiURL()}province`,
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
                        }

                        return query;
                    },
                    processResults: function (data) {
                        let filtered = [];

                        data.results.map(v => {
                            let obj = {
                                id: v.id,
                                text: v.province
                            }

                            filtered.push(obj)
                        })

                        return {
                            results: filtered
                        };
                    },
                    cache: true
                },
            });

            _submitAdd(TOKEN)

        },

        detail: (TOKEN, id) => {

            _fetchAdministrator(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })
        }
    }
})(settingController, dtController, administratorUI, lookupController)

export default administratorController