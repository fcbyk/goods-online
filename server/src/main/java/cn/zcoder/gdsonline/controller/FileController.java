package cn.zcoder.gdsonline.controller;

import cn.zcoder.gdsonline.common.Result;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/file")
public class FileController {

    @Value("${files-upload.path}")
    private String basePath;

    // 文件上传
    @PostMapping
    public String upload(MultipartFile file) throws IOException {

        // 原始文件名
        String originalFilename = file.getOriginalFilename();
        String suffix;

        try {
            suffix = originalFilename.substring(originalFilename.lastIndexOf("."));
        }catch (Exception e){
            suffix = "";
        }

        // 使用UUID随机生成文件名，防止因为文件名相同造成文件覆盖
        String fileName = UUID.randomUUID().toString()+suffix;

        //创建一个目录对象
        File dir = new File(basePath);
        //判断当前目录是否存在
        if(!dir.exists()){
            //目录不存在
            dir.mkdirs();
        }

        //将文件转存到指定位置
        file.transferTo(new File(basePath,fileName));

        return fileName;
    }

    // 文件下载
    @GetMapping("/{name}")
    public void download(@PathVariable String name, HttpServletResponse response) throws IOException {

        File file = new File(name);

        //输入流，通过输入流读取文件内容
        FileInputStream fileInputStream=new FileInputStream(new File(basePath,file.toString()));

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

    // 删除文件
    @DeleteMapping("/{name}")
    public Result<Boolean> delete(@PathVariable String name){
        File file = new File(basePath,name);
        if (file.exists()) {
            return Result.success(file.delete());
        }
        return Result.success(false);
    }

}
