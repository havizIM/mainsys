const preventiveReportUI = ((SET) => {
    return {
        renderDetail: data => {
            let no = 1;

            let grouped = data.details.reduce(function (r, a) {
                r[a.periode] = r[a.periode] || [];
                r[a.periode].push(a);
                return r;
            }, Object.create(null));

            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-body printableArea">
                            <h3><b>PREVENTIVE REPORT</b> <span class="pull-right">#${data.report_number}</span></h3>
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
                                            ${data.schedule.building !== null ? `
                                                <address>
                                                    <h3>To</h3>
                                                    <h4 class="font-bold">${SET.replaceNull(data.schedule.building.partner.partner_name)}</h4>

                                                    <p><b><i class="mdi mdi-album"></i> Building :</b> <a href="#/building/${data.schedule.building.id}">${data.schedule.building.building_code} - ${data.schedule.building.building_name}</a></p>
                                                    <p>${data.schedule.building.address}</p>
                                                    <p><b>Phone</b> : ${data.schedule.building.phone}, <b>Fax</b> : ${data.schedule.building.fax !== null ? data.schedule.building.fax : ''}</p>
                                                </address>
                                            ` : ''}
                                        </td>
                                    </tr>
                                </table>
                                <div class="col-md-12">
                                    <div class="table-responsive mt-5" style="clear: both;">
                                        <h3>Information</h3>
                                        <table class="table table-hover">
                                            <tr>
                                                <th style="width: 20%">Equipment</th>
                                                <td style="width: 80%">${data.equipment !== null ? `<a href="#/equipment/${data.equipment.id}">${data.equipment.sku} - ${data.equipment.equipment_name}</a>` : '-'}</td>
                                            </tr>
                                            <tr>
                                                <th>Schedule Date</th>
                                                <td><a href="#/preventive_schedule/${data.schedule.id}">${data.schedule.date}</a></td>
                                            </tr>
                                            <tr>
                                                <th>Report Date</th>
                                                <td>${data.date}</td>
                                            </tr>
                                        </table>

                                        <br>

                                        <h3>Details</h3>
                                        <table class="table table-hover">
                                            ${
                Object.keys(grouped).map(function (key, index) {
                    let row = ''

                    row += `
                                                        <tr style="background-color: grey; color: white">
                                                            <th colspan="2"><b>${key}</b></th>
                                                        </tr>
                                                    `

                    grouped[key].map(v => {
                        row += `
                                                            <tr>
                                                                <td style="width: 90%">${v.description}</td>
                                                                <td style="width: 10%">${v.check === 'Y' ? '<i class="fas fa-check-square fa-2x"></i>' : '<i class="fas fa-square fa-2x"></i>'}</td>
                                                            </tr>
                                                        `
                    }).join('')

                    return row
                }).join('')
                }
                                        </table>
                                    </div>
                                </div>

                                <table width="100%">
                                    <tr>
                                        <td style="width: 50%"></td>
                                        <td style="width: 50%" class="text-center">
                                            ${data.approved_by !== null && data.signature !== null ? `
                                                <h5 class="text-center">Approved By ,</h5>
                                                <a target="__blank" href="${data.signature === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}preventive_signature/file/${data.signature}`}"> <img class="img-responsive" alt="attachment" src="${data.signature === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}preventive_signature/file/${data.signature}`}"> </a>
                                                <h5 class="text-center">( ${data.approved_by} )</h5>
                                            ` : `
                                                <h5>Schedule has not been approved</h5>
                                            `}
                                        </td>
                                    </tr>
                                </table>

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
                                            <a target="__blank" href="${v.photo === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}preventive_report/file/${data.id}/${v.photo}`}"> <img class="img-thumbnail img-responsive" alt="attachment" src="${v.photo === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}preventive_report/file/${data.id}/${v.photo}`}"> </a>
                                        </div>
                                    `
                }) : '<h5 class="pl-4">Photos not available</h5>'}
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="text-right">
                                <button id="print" class="btn btn-default btn-outline" type="button"> <span><i class="fa fa-print"></i> Print</span> </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            `

            $('#main_content').html(html)
        },
    }
})(settingController)

const preventiveReportController = ((SET, DT, UI, LU) => {

    /* -------------------- DETAIL ACTION ----------------- */
    const _fetchPreventiveReport = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}preventive_report/${id}`,
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
            const table = $('#t_preventive_report').DataTable({
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
                                    filename: 'DATA_PREVENTIVE_REPORT',
                                    title: 'Data Preventive Report',
                                },
                                {
                                    extend: 'excelHtml5',
                                    text: 'Excel',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_PREVENTIVE_REPORT',
                                    title: 'Data Preventive Report'
                                },
                                {
                                    extend: 'csvHtml5',
                                    text: 'CSV',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_PREVENTIVE_REPORT',
                                    title: 'Data Preventive Report'
                                },
                                {
                                    extend: 'print',
                                    text: 'Print',
                                    exportOptions: {
                                        columns: [0, 1, 2, 3]
                                    },
                                    filename: 'DATA_PREVENTIVE_REPORT',
                                    title: '<h4>Data Preventive Report</h4>'
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
                    url: `${SET.apiURL()}preventive_report`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Content-Type", 'application/json')
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        $('#count_report').text(res.results.length)

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
                                <a href="#/preventive_report/${row.id}">${row.report_number}</a>
                            `;
                        }
                    },
                    {
                        data: "date",
                    },
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/equipment/${row.equipment.id}">${row.equipment.sku} / ${row.equipment.equipment_name}</a>
                            `;
                        }
                    },
                    {
                        data: "approved_by",
                    },
                ],
                order: [[0, "asc"]]
            })



            DT.dtFilter(table)
            DT.dtFilterRange(table, 1)

        },

        detail: (TOKEN, id) => {

            _fetchPreventiveReport(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })

            _printAll()
        }
    }
})(settingController, dtController, preventiveReportUI, lookupController)

export default preventiveReportController