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
        <div class="col-6">
            <div class="card">
                <div class="card-body" id="corrective_performance_container">
                    <h4 class="card-title">Corrective Performance</h4>
                    <canvas id="corrective_performance_chart"></canvas>
                    <br>
                    <h4 class="text-info text-center">Total Performance : <b><span id="corrective_percent">0 %</span></b></h4>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="card">
                <div class="card-body" id="preventive_performance_container">
                    <h4 class="card-title">Preventive Performance</h4>
                    <canvas id="preventive_performance_chart"></canvas>
                    <br>
                    <h4 class="text-info text-center">Total Performance : <b><span id="preventive_percent">0 %</span></b></h4>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-body" id="bussiness_container">
                    <h4 class="card-title mb-0">Today Schedule</h4>
                    <div class="table-responsive">
                        <table class="table" id="t_schedule" style="width: 100%">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Building</th>
                                    <th>Estimate</th>
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

<footer class="footer text-center">
    Develop Using Framework MIT License Codeigniter copyright (c) 2014 - 2019. British Columbia Institute of Technology.
</footer>

<script type="module">
    import dashboardController from '<?= base_url() ?>src/engineer/modules/dashboard.js';
    dashboardController.init('<?= $this->session->userdata('api_token') ?>')
</script>