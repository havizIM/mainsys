const dashboardContoller = ((SET) => {

    const _fetchPerformanceAnalytic = (TOKEN, filter, callback) => {
        $.ajax({
            url: `${SET.apiURL()}analytic/performance/${filter}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                SET.contentLoader('#performance_container')
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
                SET.closeSelectedElement('#performance_container')
            }
        })
    }

    const _fetchWorkOrder = (TOKEN, callback) => {
        $.ajax({
            url: `${SET.apiURL()}work_order`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                SET.contentLoader('#work_order_container')
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
                SET.closeSelectedElement('#work_order_container')
            }
        })
    }

    const _fetchPreventiveReport = (TOKEN, callback) => {
        $.ajax({
            url: `${SET.apiURL()}preventive_report`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                SET.contentLoader('#preventive_report_container')
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
                SET.closeSelectedElement('#preventive_report_container')
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

                SET.contentLoader('#corrective_report_container')
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
                SET.closeSelectedElement('#corrective_report_container')
            }
        })
    }

    const _getYears = function () {
        let html = '';
        let currentYear = new Date().getFullYear() + 1;
        let startYear = currentYear - 2;

        while (currentYear >= startYear) {
            currentYear--

            html += `
                <option value="${currentYear}">${currentYear}</option>
            `
        }

        $('#performance_filter').html(html)

    }

    const _onChangeEvent = (TOKEN, PERFORMANCE_CHART) => {
        $('#performance_filter').on('change', function () {
            let filter = $(this).val()

            _fetchPerformanceAnalytic(TOKEN, filter, data => {
                PERFORMANCE_CHART.data.datasets[0].data = data.preventive.total
                PERFORMANCE_CHART.data.datasets[1].data = data.corrective.total
                PERFORMANCE_CHART.update()
            })
        })

        $('#top_10_filter').on('change', function () {
            let filter = $(this).val()

            _fetchTopTen(TOKEN, filter, data => {
                if (data.length === 0) {

                } else {
                    let html = ''

                    data.forEach(v => {
                        html += `
                            <tr>
                                <td><a href="#/product/${v.product_id}">${v.product_name}</a></td>
                                <td>${SET.positiveNumber(v.qtyKey)}</td>
                                <td>Rp. ${SET.positiveCurrency(v.totalKey)}</td>
                            </tr>
                        `
                    })

                    $('#t_top_10 tbody').html(html)
                }
            })
        })
    }

    return {
        init: TOKEN => {
            _getYears()

            let bussiness = $('#performance_filter').val()

            const PERFORMANCE_CHART = new Chart(document.getElementById('performance_chart').getContext('2d'), {
                type: 'line',
                data: {
                    labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    datasets: [{
                        label: 'Preventive Maintenance',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        borderColor: "rgba(0, 176, 228, 0.75)",
                        backgroundColor: "transparent",
                        pointBorderColor: "rgba(0, 176, 228, 0)",
                        pointBackgroundColor: "rgba(0, 176, 228, 0.9)",
                        pointBorderWidth: 1,
                    }, {
                        label: 'Corrective Maintenance',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        borderColor: "rgba(255, 178, 43, 0.75)",
                        backgroundColor: "transparent",
                        pointBorderColor: "rgba(255, 178, 43, 0)",
                        pointBackgroundColor: "rgba(255, 178, 43, 0.9)",
                        pointBorderWidth: 1,
                    }],
                },
                options: {
                    responsive: true,
                    legend: {
                        display: true,
                    },
                },
            });

            const WORK_ORDER_CHART = new Chart(document.getElementById('work_order_chart').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Open', 'Proccess', 'Close'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: [
                            "red",
                            "yellow",
                            "green"
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

            const PREVENTIVE_REPORT_CHART = new Chart(document.getElementById('preventive_report_chart').getContext('2d'), {
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

            const CORRECTIVE_REPORT_CHART = new Chart(document.getElementById('corrective_report_chart').getContext('2d'), {
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


            _fetchPerformanceAnalytic(TOKEN, bussiness, data => {
                PERFORMANCE_CHART.data.datasets[0].data = data.preventive.total
                PERFORMANCE_CHART.data.datasets[1].data = data.corrective.total
                PERFORMANCE_CHART.update()
            })

            _fetchWorkOrder(TOKEN, data => {
                let open = data.filter(v => v.schedule.length === 0).length;
                let proccess = data.filter(v => v.schedule.length === 1 && v.schedule[0].corrective_report.length === 0).length;
                let close = data.filter(v => v.schedule.length === 1 && v.schedule[0].corrective_report.length === 1).length;

                WORK_ORDER_CHART.data.datasets[0].data = [open, proccess, close]

                WORK_ORDER_CHART.update()
            })

            _fetchCorrectiveReport(TOKEN, data => {
                let approved = data.filter(v => v.approved_by !== null).length;
                let proccess = data.filter(v => v.approved_by === null).length;

                CORRECTIVE_REPORT_CHART.data.datasets[0].data = [approved, proccess]
                CORRECTIVE_REPORT_CHART.update()
            })

            _fetchPreventiveReport(TOKEN, data => {
                let approved = data.filter(v => v.approved_by !== null).length;
                let proccess = data.filter(v => v.approved_by === null).length;

                PREVENTIVE_REPORT_CHART.data.datasets[0].data = [approved, proccess]
                PREVENTIVE_REPORT_CHART.update()
            })

            _onChangeEvent(TOKEN, PERFORMANCE_CHART)
        }
    }
})(settingController)

export default dashboardContoller