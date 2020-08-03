<div class="page-breadcrumb">
    <div class="row">
        <div class="col-5 align-self-center">
            <h4 class="page-title">Dashboard</h4>
        </div>
        <div class="col-7 align-self-center">
            <div class="d-flex align-items-center justify-content-end">
                <!-- <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav> -->
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body" id="performance_container">
                    <div class="d-flex align-items-center">
                        <div>
                            <h4 class="card-title mb-0">Performance</h4>
                        </div>
                        <div class="ml-auto">
                            <select class="custom-select border-0 text-muted" id="performance_filter">
                            </select>
                        </div>
                    </div>
                    <canvas id="performance_chart" height="100"></canvas>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4">
            <div class="card">
                <div class="card-body" id="work_order_container">
                    <h4 class="card-title">Work Order</h4>
                    <canvas id="work_order_chart"></canvas>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4">
            <div class="card">
                <div class="card-body" id="preventive_report_container">
                    <h4 class="card-title">Preventive Report</h4>
                    <canvas id="preventive_report_chart"></canvas>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4">
            <div class="card">
                <div class="card-body" id="corrective_report_container">
                    <h4 class="card-title">Corrective Report</h4>
                    <canvas id="corrective_report_chart"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="footer text-center">
    Develop Using Framework MIT License Codeigniter copyright (c) 2014 - 2019. British Columbia Institute of Technology.
</footer>

<script type="module">
    import dashboardController from '<?= base_url() ?>src/partner/modules/dashboard.js';
    dashboardController.init('<?= $this->session->userdata('api_token') ?>')
</script>