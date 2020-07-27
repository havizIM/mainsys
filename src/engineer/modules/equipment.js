const equipmentUI = ((SET) => {
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
                                                    <div><b>SKU</b></div>
                                                    <div>${SET.replaceNull(data.sku)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div><b>Equipment Name</b></div>
                                                    <div>${SET.replaceNull(data.equipment_name)}</div>
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
                                                    <div><b>Brand</b></div>
                                                    <div>${SET.replaceNull(data.brand)}</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div><b>Location</b></div>
                                                    <div>${SET.replaceNull(data.location)}</div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div><b>Category</b></div>
                                                    <div>${SET.replaceNull(data.category.category_name)}</div>
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

                    <div class="col-md-4">
                        <fieldset>
                            <legend><u>Procedure</u></legend>
                            <div><a href="#/procedure/${data.procedure.id}">Lihat Procedure</a></div>
                        </fieldset>

                        <p class="p-20">
                            <label>Picture</label>
                            <img src="${data.photo === null ? `${SET.baseURL()}assets/images/detail.svg` : `${SET.apiURL()}equipment/file/${data.photo}`}" class="img-fluid" alt="">
                        </p>
                    </div>

                    <div class="col-md-12">
                        <ul class="nav nav-tabs customtab" role="tablist">
                            <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#preventive" role="tab"><span class="hidden-sm-up"><i class="ti-wallet"></i></span> <span class="hidden-xs-down">Preventive</span></a> </li>
                            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#corrective" role="tab"><span class="hidden-sm-up"><i class="ti-info"></i></span> <span class="hidden-xs-down">Corrective</span></a> </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane active p-20" id="preventive" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Preventive</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_preventive">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_preventive" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Report Number</th>
                                                        <th>Date</th>
                                                        <th>Approved By</th>
                                                    </tr>
                                                </thead>
                                                <tbody></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane p-20" id="corrective" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="card bg-info">
                                            <div class="card-body text-white">
                                                <div class="d-flex flex-row">
                                                    <div class="display-6 align-self-center"><i class="ti-user"></i></div>
                                                    <div class="p-10 align-self-center">
                                                        <h4 class="m-b-0">Total Corrective</h4>
                                                    </div>
                                                    <div class="ml-auto align-self-center">
                                                        <h2 class="font-medium m-b-0" id="count_corrective">0</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="table-responsive">
                                            <table id="t_corrective" class="table" style="width: 100%">
                                                <thead>
                                                    <tr>
                                                        <th>Report Number</th>
                                                        <th>Date</th>
                                                        <th>Approved By</th>
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

const equipmentController = ((SET, DT, UI, LU) => {

    /* -------------------- DETAIL ACTION ----------------- */
    const _fetchEquipment = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}equipment/${id}`,
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

            if (container.contains($('#t_preventive')[0])) {

                $('#count_preventive').text(data.preventive_reports.length)

                const table = $('#t_preventive').DataTable({
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
                    data: data.preventive_reports,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                    <a href="#/preventive_report/${row.id}">${row.report_number}</a>
                                `;
                            }
                        },
                        {
                            data: "date"
                        },
                        {
                            data: "approved_by"
                        },
                    ],
                    order: [[1, "desc"]]
                })
            }

            if (container.contains($('#t_corrective')[0])) {

                $('#count_corrective').text(data.corrective_reports.length)

                const table = $('#t_corrective').DataTable({
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
                    data: data.corrective_reports,
                    columns: [
                        {
                            data: "id",
                            render: function (data, type, row) {
                                return `
                                    <a href="#/corrective_report/${row.id}">${row.report_number}</a>
                                `;
                            }
                        },
                        {
                            data: "date"
                        },
                        {
                            data: "approved_by"
                        },
                    ],
                    order: [[1, "desc"]]
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

        detail: (TOKEN, id) => {

            _fetchEquipment(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })
        }
    }
})(settingController, dtController, equipmentUI, lookupController)

export default equipmentController