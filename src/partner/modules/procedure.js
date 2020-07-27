const procedureUI = ((SET) => {
    return {
        renderDetail: data => {

            let grouped = data.preventive_procedures.reduce(function (r, a) {
                r[a.periode] = r[a.periode] || [];
                r[a.periode].push(a);
                return r;
            }, Object.create(null));

            let html = `
                <div class="row">
                    <div class="col-md-8">
                        <div class="p-20">
                            <fieldset>
                                <legend><u>Details</u></legend>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div><b>Identifier Name</b></div>
                                                <div>${SET.replaceNull(data.identifier_name)}</div>
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div><b>Type</b></div>
                                                <div>${SET.replaceNull(data.type)}</div>
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div><b>Other Information</b></div>
                                                <div>${SET.replaceNull(data.other_information)}</div>
                                            </div>
                                        </div>
                                    </p>
                                </fieldset>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="p-20">
                            <fieldset>
                                <legend><u>Preventive Procedure</u></legend>

                                ${
                Object.keys(grouped).map(function (key, index) {
                    let row = ''

                    row += `
                                            <h4 class="card-title">${key}</h4>
                                        `

                    grouped[key].map(v => {
                        row += `
                                                <div class="list-group">
                                                    <a href="javascript:void(0)" class="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div class="d-flex w-100 justify-content-between">
                                                            <h5 class="mb-1 text-black">${v.description}</h5>
                                                        </div>
                                                        <p class="mb-1">
                                                            Tools : <br>
                                                            <div class="pl-3">${v.tools}</div>
                                                        </p>
                                                    </a>
                                                </div>
                                            `
                    })

                    return row
                })
                }
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            `




            $('#main_content').html(html)
        },
    }
})(settingController)

const procedureController = ((SET, DT, UI, LU) => {

    /* -------------------- DETAIL ACTION ----------------- */
    const _fetchProcedure = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}procedure/${id}`,
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
            const table = $('#t_procedure').DataTable({
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
                                    filename: 'DATA PROCEDURE',
                                    title: 'Data Procedure',
                                },
                                {
                                    extend: 'excelHtml5',
                                    text: 'Excel',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA PROCEDURE',
                                    title: 'Data Procedure'
                                },
                                {
                                    extend: 'csvHtml5',
                                    text: 'CSV',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA PROCEDURE',
                                    title: 'Data Procedure'
                                },
                                {
                                    extend: 'print',
                                    text: 'Print',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA PROCEDURE',
                                    title: '<h4>Data Procedure</h4>'
                                },
                            ]
                        },
                        {
                            extend: 'colvis',
                            text: '<i class="fa fa-eye"></i>',
                            columns: [1, 2],
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
                    ]
                },
                ajax: {
                    url: `${SET.apiURL()}procedure`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Content-Type", 'application/json')
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        $('#count_procedure').text(res.results.length)

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
                                <a href="#/procedure/${row.id}">${row.identifier_name}</a>
                            `;
                        }
                    },
                    {
                        data: "type",
                    },
                    {
                        data: "preventive_procedures_count",
                        render: function (data, type, row) {
                            return `
                                ${row.preventive_procedures_count} Details
                            `;
                        }
                    },
                    {
                        data: "other_information",
                    },
                ],
                order: [[0, "asc"]]
            })



            DT.dtFilter(table)

        },

        detail: (TOKEN, id) => {
            _fetchProcedure(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })
        }
    }
})(settingController, dtController, procedureUI, lookupController)

export default procedureController