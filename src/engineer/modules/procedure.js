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

        detail: (TOKEN, id) => {
            _fetchProcedure(TOKEN, id, data => {
                _detailObserver(TOKEN, id, data)
                UI.renderDetail(data)
            })
        }
    }
})(settingController, dtController, procedureUI, lookupController)

export default procedureController