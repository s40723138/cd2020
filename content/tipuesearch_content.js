var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'WEEK', 'text': '上課每周簡易紀錄 \n', 'tags': '', 'url': 'WEEK.html'}, {'title': 'W1', 'text': '利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '更新可攜裝置中的python的版本更新至3.8.2 \n 1.至python官網 \n https://www.python.org/downloads/windows/ \n Windows x86-64 executable installer 安裝至自己可攜系統(把pip的選項去掉)。 \n 2.使用批次檔更改開始路徑 \n (可不更改名稱直接將內容檔案放入) \n 3.執行get-pip.py(取得安裝管理工具) \n 4.執行pip install指令將 \n pip install\xa0 Flask \n pip install\xa0 Markdown \n pip install\xa0 lxml \n pip install\xa0 bs4 \n pip install\xa0 flask_cors \n pip install\xa0 pelican \n pip install\xa0 leo \n 這些3.8.2版本缺少的模組依序安裝下來。 \n 參考:組員40723111 \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '分組推送合併 \n 衝突移除 \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '持續進步 \n 程式進行網頁服務 \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W6', 'text': '使用 OBS portable 進行串流 \n 未來將使用 Google  Hangouts Meet 線上授課 \n 加入視訊畫面以方便了解發言人 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '四輪機器人 \n 安裝 https://coppeliarobotics.com/downloads \n 隨機直播 \n https://youtu.be/f5B92zdtKTI \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W10', 'text': '利用虛擬主機載入寫好程式，達成遠端控制 \n 參考資料 \n https://mde.tw/cd2020pj1/content/index.html \n', 'tags': '', 'url': 'W10.html'}, {'title': 'Grpup4', 'text': 'group 4  Repository:  40423155  | Site:  40423155 Repository:  40723101  | Site:  40723101 Repository:  40723102  | Site:  40723102 Repository:  40723106  | Site:  40723106 Repository:  40723111  | Site:  40723111 Repository:  40723119  | Site:  40723119 Repository:  40723121  | Site:  40723121 Repository:  40723124  | Site:  40723124 Repository:  40723134  | Site:  40723134 Repository:  40723135  | Site:  40723135 Repository:  40723136  | Site:  40723136 Repository:  40723138  | Site:  40723138 \n 分組倉儲: https://github.com/s40723119/cd2020ag4 \n 分組網站: https://s40723138.github.io/cd2020ag4/content/index.html \n', 'tags': '', 'url': 'Grpup4.html'}, {'title': '分工', 'text': '可移植編程系統創建   :40723111 李其叡 40723138 黃奕慶 40723121 邱博義 40723101 沈易萱 https://github.com/mdecourse/cd2020/issues/18 四輪機器人  :40723124 徐敬倫 40723134 陳漢宇 40723119 林哲緯 40723102 林昱秀 https://github.com/mdecourse/cd2020/issues/12 https://github.com/mdecourse/cd2020/issues/13 https://github.com/mdecourse/cd2020/issues/15 隨機分組   : 40423155(學長) 40723135 陳藝晉 40723136 彭少鍚 40723106 王昱翔 https://github.com/mdecourse/cd2020/issues/9 \n', 'tags': '', 'url': '分工.html'}, {'title': '可攜程式系統移植', 'text': 'PortableGit： https://git-scm.com/download/win \xa0下載 64-bit Git for Windows Portable 安裝在 data 目錄下 \n MSYS2： https://www.msys2.org/ \xa0下載\xa0msys2-x86_64-20190524.exe 並安裝在 data/msys64 的 目錄下 \n SciTE： https://www.scintilla.org/SciTEDownload.html \xa0下載 full 64-bit download，解壓縮檔案至 data/wscite432，就是可以直接執行的 Scite.exe 編輯器，若希望以 UtF-8 編碼開啟文件，就必須啟用 Options 下拉式功能表中的 Global Options File（同\xa0SciTEGlobal.properties 檔案）其中的預設值 code.page=0 （為Windows 內定的 Big-5 編碼）修改設定為 code.page=65001，表示使用使 UTF-8 編碼，若要開啟即時更新內容，將load.on.activate=1 前面的井字號拿掉，就會即時更新了（SciTE 須重啟） \n start.bat \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo off \n set Disk=y \n subst %Disk%: "data" \n \xa0 \n %Disk%: \n \xa0 \n set HomePath=%Disk%:\\home \n set HomeDrive=%Disk%:\\home \n set Home=%Disk%:\\home \n set USERPROFILE=%Disk%:\\home \n \xa0 \n REM 將系統 Python 程式的 io 設為 utf-8 \n set PYTHONIOENCODING="utf-8" \n \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \n set PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages; \n set PYTHONHOME=%Disk%:\\py382 \n \xa0 \n set path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts; \n set path_msys2=%Disk%:\\msys64\\mingw64\\bin; \n set path_git=%Disk%:\\portablegit\\bin; \n set path_tcc=%Disk%:\\tcc; \n \xa0 \n path=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%; \n \xa0 \n start /MIN cmd.exe \n start /MIN cmd.exe \n start /MIN cmd.exe \n start /MIN cmd.exe \n \xa0 \n start /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe \n start /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe \n \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo off \n set Disk=y \n path=%PATH%; \n \xa0 \n taskkill /IM python.exe /F \n taskkill /IM pythonw.exe /F \n taskkill /IM scite.exe /F \n \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst %Disk%: /D \n REM 關閉 cmd 指令視窗 \n taskkill /IM cmd.exe /F \n \xa0 \n EXIT \n \n \n \n \n \n', 'tags': '', 'url': '可攜程式系統移植.html'}, {'title': '分工組員', 'text': '40723101 沈易萱 \n 40723111 李其叡 \n 40723121 邱博義 \n 40723138 黃奕慶 \n', 'tags': '', 'url': '分工組員.html'}, {'title': '虛擬主機設定', 'text': '1.先下載老師設定好的Ubuntu \n 2.匯入檔案 \n 3.設定網路 \n 4.進入Activites開啟LXTermial \n 5.輸入xterm& cd到資料夾內 \n 6.輸入./ coppeliaSim.sh就可以開啟vrep \n \n 遇到問題: \n 無法開啟虛擬機器 Ubuntu 20.04_cd2020pj1 的工作階段。 Failed to open/create the internal network \'HostInterfaceNetworking-VirtualBox Host-Only Ethernet Adapter\' (VERR_INTNET_FLT_IF_NOT_FOUND). Failed to attach the network LUN (VERR_INTNET_FLT_IF_NOT_FOUND). 結果 碼: E_FAIL (0x80004005) 元件: ConsoleWrap 介面: IConsole {872da645-4a9b-1727-bee2-5585105b9eed} \n \n 解結方法: \n 更新Ubuntu版本 \n ____________________________________________________________________ \n 遇到puTTY問題: \n \n 解決方法: 更新 puTTY \n ____________________________________________________________________ \n 遇到在Ubuntu開啟wsgi.py問題 \n \n 解決方法: \n 變更檔案"oauth_gm.txt"位子至tmp \n', 'tags': '', 'url': '虛擬主機設定.html'}]};