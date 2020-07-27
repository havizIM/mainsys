<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

    function __construct()
    {
		parent::__construct();
        $this->load->library('session');
        
        if(!$this->session->has_userdata('logged_in')){
            redirect('login');
        } else {
            if($this->session->userdata('roles') !== 'ENGINEER'){
                redirect('/'.strtolower($this->session->userdata('roles').'/'));
            }
        }
    }
    
	public function index()
	{
		$this->load->view('engineer/main');
	}
}
