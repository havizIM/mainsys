const mainUI = (() => {
    return {
        renderLog: data => {
            let html = `
                <div class="steamline">
                    ${data.map(v => {
                         return `
                            <div class="sl-item">
                                <div class="sl-left"><div class="timeline-badge info"><i class="fa fa-check"></i></div></div>
                                <div class="sl-right">
                                    <div>
                                        <a href="${v.url}">${v.description}</a>
                                        
                                    </div>
                                    <div class="desc">
                                        <span class="sl-date">${v.created_at}</span>
                                    </div>
                                </div>
                            </div>
                        `
            }).join('')}
                </div>
            `

            $('#sidebar_log').html(html)
        },
        renderNoData: () => {

        },
        renderError: err => {

        }
    }
})()

const mainController = ((SET, UI) => {

    const _loadContent = path => {
        $.ajax({
            url: `${SET.baseURL()}engineer/${path}`,
            dataType: 'HTML',
            beforeSend: function () {
                SET.pageLoader()
            },
            success: function (response) {
                $('#app_content').html(response)
                $('body').removeClass('modal-open')
                $('body').removeAttr('style')
            },
            error: function () {
                $('#app_content').load(`${SET.baseURL()}page_not_found`);
            },
            complete: () => {
                SET.closePageLoader()
            }
        })
    }

    const _setRoute = () => {
        let path;

        if (location.hash) {
            path = location.hash;
            _loadContent(path.substr(2));
        } else {
            location.hash = '#/dashboard';
        }

        $(window).on('hashchange', function (e) {
            path = location.hash;

            if ($('.modal').hasClass('show')) {
                // $('.modal').modal('hide');
                $('.modal-backdrop').remove();
            }

            _loadContent(path.substr(2));
        });
    }

    const _logoutApp = () => {
        $('.logout').on('click', function () {
            $.ajax({
                url: `${SET.baseURL()}logout`,
                type: 'GET',
                dataType: 'JSON',
                beforeSend: function () {
                    SET.pageLoader()
                },
                success: ({ data }) => {
                    window.location.replace(`${SET.baseURL()}login`);
                },
                error: err => {
                    toastr.error(err.message, 'Failed', { "progressBar": true, "closeButton": true });
                },
                complete: () => {
                    SET.closePageLoader()
                }
            })
        })
    }

    const _panelLog = TOKEN => {
        $('#btn_panel').on('click', function () {
            $.ajax({
                url: `${SET.apiURL()}setting/log`,
                type: 'GET',
                dataType: 'JSON',
                beforeSend: xhr => {
                    xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                    SET.contentLoader('.customizer-body')
                },
                success: res => {
                    UI.renderLog(res.results)
                },
                error: ({ responseJSON }) => {
                    toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                },
                complete: () => {
                    SET.closeSelectedElement('.customizer-body')
                }
            })
        })
    }

    const _welcomePanel = (TOKEN) => {
        let has_modal = $('#modal_welcome').length;

        if (has_modal === 1) {
            $('#modal_welcome').modal('show');
        }
    }

    return {
        init: TOKEN => {
            _welcomePanel(TOKEN)

            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                $($.fn.dataTable.tables(true)).DataTable()
                    .columns.adjust()
                    .responsive.recalc();
            });

            _logoutApp()
            _panelLog(TOKEN)
            _setRoute()
        }
    }
})(settingController, mainUI)