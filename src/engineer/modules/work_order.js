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
                            <div class="text-right">
                                ${data.schedule.length === 0 ? `
                                <a class="btn btn-success" href="#/corrective_schedule/add/${data.id}"><i class="fa fa-calendar"></i> Create Schedule </a>` : `<b class="text-success pr-2"><i class="fa fa-check"></i> Schedule Created</b>`}
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
        detail: (TOKEN, id) => {

            _fetchWorkOrder(TOKEN, id, data => {
                console.log(data)
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })

            _printAll()
        }
    }
})(settingController, dtController, administratorUI, lookupController)

export default administratorController