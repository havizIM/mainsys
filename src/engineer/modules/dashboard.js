const dashboardContoller = ((SET) => {

    const _fetchPreventiveReport = (TOKEN, callback) => {
        $.ajax({
            url: `${SET.apiURL()}preventive_report`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                SET.contentLoader('#preventive_performance_container')
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
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
            complete: () => {
                SET.closeSelectedElement('#preventive_performance_container')
            }
        })
    }

    const _fetchCorrectiveReport = (TOKEN, callback) => {
        $.ajax({
            url: `${SET.apiURL()}corrective_report`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                SET.contentLoader('#corrective_performance_container')
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
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
            complete: () => {
                SET.closeSelectedElement('#corrective_performance_container')
            }
        })
    }

    return {
        init: TOKEN => {

            const table = $('#t_schedule').DataTable({
                autoWidth: true,
                responsive: false,
                scrollX: true,
                scrollY: 300,
                processing: false,
                language: SET.dtLanguage(),
                dom: "<'row mt-2 mb-2'<'col-md-6'><'col-md-6'>><t><'row'<'col-md-6'i><'col-md-6'>>",
                keys: { columns: [1, 2] },
                pageLength: 50,
                ajax: {
                    url: `${SET.apiURL()}analytic/today_schedule`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Content-Type", 'application/json')
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
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
                            if (row.type === 'Preventive') {
                                return `<a href="#/preventive_schedule/${row.id}">${row.date}</a>`
                            } else {
                                return `<a href="#/corrective_schedule/${row.id}">${row.date}</a>`
                            }
                        }
                    },
                    {
                        data: "type",
                        render: function (data, type, row) {
                            if(row.type === 'Preventive'){
                                return '<div class="text-info">Preventive</div>'
                            } else {
                                return '<div class="text-info">Corrective</div>'
                            }
                        }
                    },
                    {
                        data: "building",
                        render: function (data, type, row) {
                            return `
                                <a href="#/building/${row.building.id}">${row.building.building_name}</a>
                            `;
                        }
                    },
                    {
                        data: "estimate",
                    },
                ],
                order: [[0, "desc"]]
            })

            const PREVENTIVE_REPORT_CHART = new Chart(document.getElementById('preventive_performance_chart').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Approved', 'Proccess'],
                    datasets: [{
                        data: [0, 0],
                        backgroundColor: [
                            "green",
                            "yellow",
                        ]
                    }],
                },

                options: {
                    legend: {
                        display: true,
                    },
                    responsive: true,
                    tooltips: {
                        enabled: true,
                    }
                }
            });

            const CORRECTIVE_REPORT_CHART = new Chart(document.getElementById('corrective_performance_chart').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Approved', 'Proccess'],
                    datasets: [{
                        data: [0, 0],
                        backgroundColor: [
                            "green",
                            "yellow",
                        ]
                    }],
                },

                options: {
                    legend: {
                        display: true,
                    },
                    responsive: true,
                    tooltips: {
                        enabled: true,
                    }
                }
            });

            _fetchCorrectiveReport(TOKEN, data => {
                let approved = data.filter(v => v.approved_by !== null).length;
                let proccess = data.filter(v => v.approved_by === null).length;

                let percent = (approved / data.length) * 100 

                $('#corrective_percent').text(`${approved === 0 && data.length === 0 ? 0 : percent}%`)

                CORRECTIVE_REPORT_CHART.data.datasets[0].data = [approved, proccess]
                CORRECTIVE_REPORT_CHART.update()
            })

            _fetchPreventiveReport(TOKEN, data => {
                let approved = data.filter(v => v.approved_by !== null).length;
                let proccess = data.filter(v => v.approved_by === null).length;

                let percent = (approved / data.length) * 100 

                $('#preventive_percent').text(`${approved === 0 && data.length === 0 ? 0 : percent}%`)

                PREVENTIVE_REPORT_CHART.data.datasets[0].data = [approved, proccess]
                PREVENTIVE_REPORT_CHART.update()
            })
        }
    }
})(settingController)

export default dashboardContoller