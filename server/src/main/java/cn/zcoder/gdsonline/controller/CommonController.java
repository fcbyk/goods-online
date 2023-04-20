package cn.zcoder.gdsonline.controller;

import cn.zcoder.gdsonline.entity.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/common")
public class CommonController {

    @GetMapping("/{id}")
    public Student hello(@PathVariable String id){
        System.out.println(id);
        return new Student("张三",18);
    }
}
