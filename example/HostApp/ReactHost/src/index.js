import React from "react";
import ReactDOM from "react-dom";

// 加载 console os 的依赖
import { start } from "@alicloud/console-os-kernal";
import Application from "@alicloud/console-os-react-app";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* 渲染应用 */}
      <div className="react">
        <Application
          id="os-example"
          // src="http://localhost:8080/img/logo.82b9c7a5.png"
          manifest="http://localhost:8083/os-example.manifest.json"
        />
      </div>

      <div className="vue">
        <Application
          id="os-example-vue"
          manifest="http://localhost:8080/os-example-vue.manifest.json"
        />
      </div>

    </div>
  );
}

window.title = "ALIYUN";

start({
  // 沙箱配置
  sandBox: {
    // true: 关闭沙箱, false: 打开沙箱
    // 关闭沙箱之后，点击路由你可以看到路由发生了变化
    // 再次开启之后，可以看到路由没有发生变化
    disable: false,
    // 宿主变量白名单
    // externalsVars: ["title"],
    // 沙箱初始地址
    initialPath: '/'
  },
  // 注入应用依赖
  deps: {
    react: React,
    "react-dom": ReactDOM
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
