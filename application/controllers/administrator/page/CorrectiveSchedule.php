<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CorrectiveSchedule extends CI_Controller {

    function __construct()
    {
		parent::__construct();
        $this->load->library('session');
        $this->roles = $this->session->userdata('roles');
        
        if(!$this->session->has_userdata('logged_in')){
            redirect('unauthenticated');
        }

    }
    
	public function index()
	{
		$this->load->view('administrator/schedule/corrective/data');
    }
    
    public function detail($id)
	{
		$data['id'] = $id;
		$this->load->view('administrator/schedule/corrective/detail', $data);
    }

    public function edit($id)
	{
		$data['id'] = $id;
		$this->load->view('administrator/schedule/corrective/edit', $data);
    }
}
