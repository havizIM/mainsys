const preventiveReportUI = ((SET) => {

    let count = 0
    
    return {

        resetCount: () => {
            count = 0
        },

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
                                        <td style="width: 50%">
                                            ${data.approved_by !== null && data.signature !== null ? `
                                                <h5 class="text-center">Approved By ,</h5>
                                                <a target="__blank" href="${data.signature === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}preventive_signature/file/${data.signature}`}"> <img class="img-responsive" alt="attachment" src="${data.signature === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}preventive_signature/file/${data.signature}`}"> </a>
                                                <h5 class="text-center">( ${data.approved_by} )</h5>
                                            ` : `
                                                <form id="form_sign">
                                                    <div class="form-group">
                                                        <label for="">Partner Sign</label>
                                                        <div class="signArea" style="width: 100%; height: 250px; margin-bottom: 20px;">
                                                            <canvas class="partner_sign_wrap" id="partner_sign_wrap" style="width: auto; border: 1px solid #ddd"></canvas>
                                                            <input type="hidden" name="signature" id="submit_partner_sign">
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-12 text-right">
                                                                <button class="btn btn-md btn-danger" id="clear_partner_sign" type="button"
                                                                    style="display: none;">Batal</button>
                                                                <button class="btn btn-md btn-info" id="save_partner_sign" type="button" style="display: none;">Oke</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <input type="text" name="approved_by" id="submit_partner_description" class="form-control" placeholder="Approved By">
                                                    </div>
                                                    <div class="form-group">
                                                        <button type="submit" class="btn btn-info btn-block">Submit</button>
                                                    </div>
                                                </form>
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

        renderCreateReport: (data, id_equipment) => {
            let preventive = data.preventives.filter(v => v.equipment.id === id_equipment);

            let grouped = preventive[0].equipment.procedure.preventive_procedures.reduce(function (r, a) {
                r[a.periode] = r[a.periode] || [];
                r[a.periode].push(a);
                return r;
            }, Object.create(null));

            let procedure_row = 0;

            let html = `
                <form id="form_add" class="form-horizontal">

                    <div class="card-body bg-info text-white">
                        <h4 class="card-title">Detail Report</h4>
                        <div class="form-group row">
                            <div class="col-sm-3 text-right">Partner</div>
                            <div class="col-sm-9">
                                <b>${data.building.partner.partner_name}</b>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-3 text-right">Building</div>
                            <div class="col-sm-3">
                                <b>${data.building.building_code} / ${data.building.building_name}</b>
                            </div>

                            <div class="col-sm-3 text-right">Equipment</div>
                            <div class="col-sm-3">
                                <b>${preventive[0].equipment.sku} / ${preventive[0].equipment.equipment_name}</b>
                                <input type="hidden" id="equipment_id" name="equipment_id" value="${preventive[0].equipment.id}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-3 text-right">Schedule Date</div>
                            <div class="col-sm-9">
                                <b>${data.date}</b>
                                <input type="hidden" id="schedule_id" name="schedule_id" value="${data.id}">
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Form Report</h4>
                        <div class="form-group row">
                            <label for="date" class="col-sm-2 text-right control-label col-form-label">Date</label>
                            <div class="col-sm-10">
                                <input type="date" name="date" id="date" class="form-control">
                            </div>
                        </div>
                         <div class="form-group row">
                            <label for="note" class="col-sm-2 text-right control-label col-form-label">Note</label>
                            <div class="col-sm-10">
                                <textarea class="form-control" id="note" name="note" rows="15"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="card-body">
                        <h4 class="card-title">Procedures</h4>
                        <table class="table table-hover">
                            ${
                                Object.keys(grouped).map(function (key, index) {
                                    let row = ''

                                    row += `
                                        <tr class="bg-primary" style="color: white">
                                            <th colspan="2"><b>${key}</b></th>
                                        </tr>
                                    `

                                    grouped[key].map(v => {
                                        procedure_row += 1;
                                        
                                        row += `
                                            <tr>
                                                <td style="width: 90%">
                                                    ${v.description}
                                                    <input type="hidden" name="description[${procedure_row}]" value="${v.description}">
                                                    <input type="hidden" name="periode[${procedure_row}]" value="${v.periode}">
                                                    <input type="hidden" name="tools[${procedure_row}]" value="${v.tools}">
                                                </td>
                                                <td style="width: 10%">
                                                    <fieldset class="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="check[${procedure_row}]" value="Y" style="width: 20px; height: 20px">
                                                        </label>
                                                    </fieldset>
                                                </td>
                                            </tr>
                                        `
                                    }).join('')

                                    return row
                                }).join('')
                             }
                        </table>
                    </div>
                    <hr>
                    <div class="card-body">
                        <h4 class="card-title">Photos</h4>

                        <table class="table" id="t_add_photo">
                            <tr id="row_0">
                                <td>
                                    <div class="form-group">
                                        <input type="file" class="dropify" name="photo[0]" id="photo_0" required>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        </table>

                        <button type="button" class="btn btn-info btn-small btn_add_row" id="btn_add_row">Tambah Foto <i class="fa fa-plus"></i></button>
                    </div>
                    <hr>
                    <div class="card-body">
                        <div class="form-group m-b-0 text-right">
                            <a href="#/work_order" class="btn btn-dark waves-effect waves-light">Cancel</a>
                            <button type="submit" class="btn btn-info waves-effect waves-light">Submit</button>
                        </div>
                    </div>
                
                </form>
            `

            $('#detail_container').html(html)
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
            $('#photo_' + count).dropify()
        }
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

            if (container.contains($('#partner_sign_wrap')[0])) {
                const partner = document.getElementById("partner_sign_wrap")
                const partnerSign = new SignaturePad(partner);
                partnerSign.off();

                const parentPartnerWidth = $(partner).parent().outerWidth()
                const parentPartnerHeight = $(partner).parent().outerHeight()
                partner.setAttribute("width", parentPartnerWidth);
                partner.setAttribute("height", parentPartnerHeight);

                $('#partner_sign_wrap').on('click', function () {
                    partnerSign.on();

                    $(this).css({
                        border: '1px solid red'
                    })

                    if (partnerSign.isEmpty()) {
                        $('#save_partner_sign').show();
                        $('#clear_partner_sign').show();
                    } else {
                        $('#clear_partner_sign').show();
                    }
                })

                $('#save_partner_sign').on('click', function () {
                    if (partnerSign.isEmpty()) {
                        alert('Silahkan tanda tangani...')
                    } else {
                        let data = partnerSign.toDataURL('image/png');
                        let img_data = data.replace(/^data:image\/(png|jpg);base64,/, "");
                        $('#submit_partner_sign').val(img_data);

                        partnerSign.off();
                        $(this).hide();
                        $('#clear_partner_sign').hide();

                        $('#partner_sign_wrap').css({
                            border: '1px solid #ddd'
                        })
                    }
                })

                $('#clear_partner_sign').on('click', function () {
                    partnerSign.clear();
                    partnerSign.on();
                    $('#submit_partner_sign').val('');

                    $('#save_partner_sign').show();
                })

                _submitSign(TOKEN, id)
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

    const _fetchDetailPreventiveSchedule = (TOKEN, id, callback) => {
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

    const _submitSign = (TOKEN, id) => {
        $('#form_sign').validate({
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            validClass: 'is-valid',
            errorElement: 'div',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                error.insertAfter(element)
            },
            ignore: "",
            rules: {
                signature: 'required',
                approved_by: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}preventive_report/approve/${id}`,
                    type: 'PUT',
                    dataType: 'JSON',
                    data: $(form).serialize(),
                    // contentType: false,
                    // processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#form_sign')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });

                        _fetchPreventiveReport(TOKEN, id, data => {
                            _detailObserver(TOKEN, id, data)
                            UI.renderDetail(data)
                        })
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#form_sign')
                    }
                })
            }
        })
    }

    const _createReportObserver = (TOKEN, id_schedule, id_equipment, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let container = document.querySelector("#detail_container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('#form_add')[0])) {
                $('.dropify').dropify()

                _addRow()
                _removeRow()
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
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}preventive_report`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#detail_container')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/preventive_report/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('#detail_container')
                    }
                })
            }
        })
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
        },

        add: (TOKEN, id_schedule, id_equipment) => {
            UI.resetCount()

            _fetchDetailPreventiveSchedule(TOKEN, id_schedule, data => {
                _createReportObserver(TOKEN, id_schedule, id_equipment, data)
                UI.renderCreateReport(data, id_equipment)
            })

        }
    }
})(settingController, dtController, preventiveReportUI, lookupController)

export default preventiveReportController