package cn.zcoder.gdsonline.controller;

import cn.zcoder.gdsonline.dto.Result;
import cn.zcoder.gdsonline.mapper.UserMapper;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/file")
public class FileController {

    private final String basePath = "D:\\img\\";

    // 图片上传
    @PostMapping("/upload")
    public Result<String> upload(MultipartFile file, HttpServletRequest httpServletRequest) throws IOException {
        file.transferTo(new File(basePath+file.getOriginalFilename()));
        System.out.println(file.getOriginalFilename());
        return Result.success("上传成功");
    }

    // 图片下载
    @GetMapping("/img/{name}")
    public void download(@PathVariable String name, HttpServletResponse response) throws IOException {
        //输入流，通过输入流读取文件内容
        FileInputStream fileInputStream=new FileInputStream(new File(basePath+name));
        //输出流，通过输出流将文件写回浏览器，在浏览器中展示图片
        ServletOutputStream outputStream = response.getOutputStream();
        int len=0;
        byte[] bytes = new byte[1024];
        while ((len=fileInputStream.read(bytes))!=-1){
            outputStream.write(bytes,0,len);
            outputStream.flush();
        }
        outputStream.close();
        fileInputStream.close();
    }

}
