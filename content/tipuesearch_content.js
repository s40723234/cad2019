var tipuesearch = {"pages": [{'title': 'week02-05', 'text': '', 'tags': '', 'url': 'week02-05.html'}, {'title': 'week06-09', 'text': '', 'tags': '', 'url': 'week06-09.html'}, {'title': 'week10-14', 'text': '', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': 'week02 \n 建立倉儲與開近端，以下有影片(開cc字幕) \n 1.下載2019fall可攜程式至隨身碟 \n 2. 設定user name和email及proxy \n 3. git clone 個人github倉儲 \n 4. 利用submodule指令設定cmsimde \n 5. 設定flask_cors \n 6. 利用cmsimde python wsgi.py 開啟近端 \n \n Week03 \n 編譯Slovespace，以下有影片(開cc字幕) \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本在 2.13 以上，即可使用 git clone --recurse-submodules 指令取得所有子模組資料 \n 3. 將CMakeLists line 713 and 714 前面加上 # \n 4. 手動進行 libpng.dll.a 的編譯，並且改名為 libpng_static.a 後放到Y槽的 lib 目錄 \n 5. 回到 solvespace 目錄， 建立 build 目錄後進入 build 目錄，執行以下兩行程式 \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n \n Week04 \n 跟上week02與week03的進度 \n Week05 \n Slovespace 操作，以下有影片(開cc字幕) \n 1.\xa0 solvespace進行零組件繪製 \n 2.\xa0 每人分別選擇要繪製之零組件 \n 3.\xa0 利用solvespace進行繪製 \n \n', 'tags': '', 'url': 'week15-18.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};