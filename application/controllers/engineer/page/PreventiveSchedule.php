<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PreventiveSchedule extends CI_Controller {

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
		$this->load->view('engineer/schedule/preventive/data');
    }
    
    public function detail($id)
	{
		$data['id'] = $id;
		$this->load->view('engineer/schedule/preventive/detail', $data);
    }

    public function create_report($id_schedule, $id_equipment)
	{
		$data['id_schedule'] = $id_schedule;
        $data['id_equipment'] = $id_equipment;
        
		$this->load->view('engineer/schedule/preventive/create_report', $data);
    }
}
