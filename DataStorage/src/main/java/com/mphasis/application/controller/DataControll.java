package com.mphasis.application.controller;



import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.mphasis.application.pojo.DataPojo;


@Controller
public class DataControll {
	@GetMapping("/")
	public String getHome(Model model) {
		model.addAttribute("dataPojo",new DataPojo());
		return "entrypage";
	}
}
