var tipuesearch = {"pages": [{'title': 'Week', 'text': 'week02-05 \n week06-09 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'week02-06', 'text': 'week02 \n 建立倉儲與開近端，以下有影片(開cc字幕) \n 1.下載2019fall可攜程式至隨身碟 \n 2. 設定user name和email及proxy \n 3. git clone 個人github倉儲 \n 4. 利用submodule指令設定cmsimde \n 5. 設定flask_cors \n 6. 利用cmsimde python wsgi.py 開啟近端 \n \n Week03 \n 編譯Slovespace，以下有影片(開cc字幕) \n 1. 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2. 查驗 git 版本在 2.13 以上，即可使用 git clone --recurse-submodules 指令取得所有子模組資料 \n 3. 將CMakeLists line 713 and 714 前面加上 # \n 4. 手動進行 libpng.dll.a 的編譯，並且改名為 libpng_static.a 後放到Y槽的 lib 目錄 \n 5. 回到 solvespace 目錄， 建立 build 目錄後進入 build 目錄，執行以下兩行程式 \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n \n Week04 \n 跟上week02與week03的進度 \n Week05 \n Slovespace 操作，以下有影片(開cc字幕) \n 1.\xa0 solvespace進行零組件繪製 \n 2.\xa0 每人分別選擇要繪製之零組件 \n 3.\xa0 利用solvespace進行繪製 \n \n', 'tags': '', 'url': 'week02-06.html'}, {'title': 'week06-09', 'text': "week06 \n Solvespace 繪製，以下是影片(開cc字幕) \n 1.\xa0\xa0 利用 Solvespace 繪製雙輪車所需要的零組件 \n 2.\xa0 首先繪製自走車之輪子 \n 3.\xa0 繪製自走車本體 \n 4.\xa0 開新檔組裝自走車本體與輪子 \n \n V-rep 模型控制，以下有影片(開cc字幕) \n 1. \xa0下載 V-rep 3.6.1 rev4 與 web_vrep2.zip(local) \n 2.\xa0 開啟V-rep 3.6.1 rev4裡的vrep.exe後開啟\xa0web_vrep2裡的two_wheeler.ttt \n 3.\xa0 利用小白框開啟web_vrep2裡的app.py以開啟localhost:5000 \n 4.\xa0\xa0利用localhost:5000操控小車轉向與速度 \n 5.\xa0\xa0web_vrep2裡沒有remoteApi.dll檔的話，要到V-rep 3.6.1 rev4找到programming裡 \n remoteApiBindings裡lib裡Windows裡64bit裡複製到web_vrep2，才可使用app.py開 \n 啟localhost:5000操控小車 \n \n 新增啟動與停止按鈕，以下是影片(開cc字幕) \n 1.\xa0 首先開啟 wed_vrep2 資料夾裡tempate資料夾的controls進編輯器 \n 2.\xa0 利用原有按鈕的程式進行複製修改，新增啟動及停止的按鈕 \n 3. 接著拉wed_vrep2 資料夾裡的 vrep_linefollower.py檔進編輯器 \n 4. 在 def to direction 下加上\xa0if direction == 'start': 後打上vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot)\xa0 定義開始按鈕 \n 5. 接著打上\xa0\xa0elif direction == 'stop': vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) 定義停止按鈕 \n 6.\xa0 後續打上else :\xa0 並排列好順序 \n 7. 利用 app.py 開啟 localhost:5000\xa0 \n 8. 打開vrep 導入雙輪車，利用\xa0\xa0\xa0localhost:5000\xa0 進行開始與停止操控 \n \n week07 \n Slovespace編譯，以下是影片(開cc字幕) \n 1.\xa0\xa0 到tmp > solvespace > build >src >CMakeFiles > solvespace.dir刪掉\xa0 \xa0 \xa0 \xa0 \xa0 \xa0slovespace.cpp.obj檔 \n 2. 到 \xa0solvespace\xa0>src找到\xa0\xa0slovespace.cpp 拉進編輯器 \n 3. 利用ctrl + f 進行搜尋 ，找GPL \n 4.\xa0 找到\xa0\xa0this\xa0 is\xa0\xa0 solvespace 在後面加上 is compiled by 自己學號 \n 5. 利用小黑框，路徑移置\xa0tmp > solvespace > build 打上\xa0mingw32-makemingw32-make 指令 \n 6. 完成後到\xa0solvespace > build >bin 開啟\xa0slovespace.exe ，進help 點 about 確認驗證完成 \n \n Sol vespace 繪圖認證，以下是影片(開cc字幕) \n 1.\xa0 繪製零件3 \n \n week08 \n CMSimfly網際內容管理啟用，以下是影片(開cc字幕) \n 1.\xa0 leo\xa0 \n 2. 到cad2019>config資料夾找到pelican.leo拉進開啟的leo裡\xa0 \n 3. 開啟個人網頁home下裡的blog，複製個人blog網址 \n 4.\xa0 到leo裡的path裡的pelican裡的遠端下，把個人部落格網址貼上 ，然後把名稱改成個人學號 \n 5. 點旁邊的 local blog按右鍵點goto script \n 6. 複製pelican markdown -o blog -s local_publishconf.pypelican markdown -o blog -s local_publishconf.py指令，利用小黑框將位置改至個人倉儲，貼上指令 \n 7.\xa0 完成後到cad2019 > blog 檢查有東西後，開啟 localhost8444確定blog啟用成功後git push上去即完成 \n \n 導入webots \n \n week09 \n 期中報告影片 \n \n", 'tags': '', 'url': 'week06-09.html'}, {'title': 'week10-14', 'text': 'week10 \n 分組並建立組別倉儲 \n 1.由組長創建 分組網站 https://s40723221.github.io/cad2019bg2/content/index.html 和 分組倉儲 https://github.com/s40723221/cad2019bg2 \n \n \n 2.加入創建之分組網站 \n 3.加入後用git\xa0 clone submodules 組別倉儲網址 \n \xa0 \n 4.以git pull request的方式進行推送 \n 5 .nx12 / nx3的操作手冊和教程 \n \n \n nx12及nx3下載點和資料參考點(虛擬主機板本):\xa0 http://mde.tw/cad2019/content/NX.html \n VirtualBox下載點:\xa0 https://briian.com/5690/ \n \n nx12及nx3下載點和資料參考點:\xa0 http://mde.tw/cad2019/content/NX.html \n \n \n solidwork下載點和資料參考點: \xa0 http://mde.tw/cad2019/content/Solidwo... \n \n \n VirtualBox下載點:\xa0 https://briian.com/5690/ \n \n \n week11 \n 校慶週 \n week12 \n 1.翻譯電子書內容(第6章) \n 2.參考NX設計電子書 :\xa0 \xa0http://mde.tw/cad2019/downloads/NX-12-for-Engineering- Design.pdf\xa0 \n 第 6 章 - 部件建模 \n \xa0\xa0\xa0 每天，我們都會看到許多將組件組裝成一個模型的示例，例如自行車，汽車和計算機。 所有這些產品都是通過設計和製造單個零件，然後將它們裝配在一起。 創造它們的設計師有仔細計劃每個零件，使它們完美地配合在一起以執行所需的操作功能。 \n \xa0\xa0\xa0 在本章中，您將學習在裝配體建模中使用的兩種方法。 我們會以葉輪組件為例練習裝配建模。 這個的某些部分前面的章節已經對程序集進行了建模。 \n NX12裝配體是一個零件文件，其中包含各個零件。 它們被添加到零件文件中這樣一來，零件實際上就位於裝配體中並鏈接到原始零件。 這個無需為計算機中的各個部件創建單獨的內存空間。 \n 所有零件都是可選的，可在設計過程中用於信息和配合。確保設計師想要的完美契合。 下圖顯示了組件如何添加以進行裝配。 \n \xa0 \n 6.1術語 \n 部件 \n 部件體是指向零件和 / 或子裝配體的指針的集合。 部件是零件文件，其中包含組件對象 \n 組件對象 \n 零部件對像是指向包含零部件的零件文件的非幾何指針幾何。 組件對象存儲諸如圖層，顏色，參考集，位置之類的信息相對於文件系統中零件的裝配體和路徑的零件數據。 \n 組成部分 \n 零件是指的零件文件裝配件中的零部件對象。 實際幾何存儲在組件中部分並被引用，而不是被部件 \n \n 組件發生 \n 零部件的出現是零部件文件中指向幾何的指針。 \n \xa0使用組件在不創建其他幾何圖形的情況下創建對零部件的一個或多個引用的實例。 \n 參考集 \n 參考集是零部件或子裝配體中的對象的命名集合，您可以用於簡化高層裝配中零部件的表示。 \n 6.2組裝方法 \n 創建任何裝配體模型有兩種基本方法。 \n \n Top-Down Approach( 自上而下的方法  ) \n Bottom-Up Approach( 自下而上的方法  ) \n \n \n 6.2.1 自上而下的方法 \n 通過這種方法，將創建裝配零件文件。首先，在該文件中創建組件， 然後各個零件均已建模。 \n 這類建模在新設計中很有用。 \n 6.2.2 自下而上的方法 \n 首先在傳統方式，然後添加到裝配中零件文件。 這項技術特別有用，以前的零件文件已經存在時設計，並且可以重複使用。 \n 6.2.3 混合搭配 \n 您可以將這兩種方法結合起來必要的，以增加裝配的靈活性設計需求。 \n 6.3部件與約束導航儀 \n 部件導航器和約束導航器位於部件導航器的頂部屏幕左側的資源欄。 \n 這些導航器向您展示了構成裝配體，包括零件層次結構，零件名稱，有關零件的信息，例如是否部分是只讀的，對像數和約束狀態。 \n \n 6.4匹配約束 \n 將零部件對象添加到裝配零件文件後，將對每個零部件對象進行配對與現有對象。 通過在部件的零部件上分配配合條件，您可以在這些組件之間建立位置關係或約束。 這些關係是 \n 稱為交配約束。 配合條件由一個或多個配合約束組成。 \n 有不同的配合約束，如下所述： \n \n 觸摸 / 對齊：選定要對齊的平面對象將是共面的，但平面的法線將指向同一方向。 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0圓柱物體的中心線將與每個其他。 \n \n 同心 \xa0:\xa0 約束兩個分量的圓形或橢圓形邊緣，因此中心為重合併且邊緣的平面共 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 面。 \n 距離：在兩個對象之間建立一個 +/- 距離（偏移）值 \n 平行 \xa0 ：所選對象將彼此平行。 \n 垂直 \xa0 ：所選對象將彼此垂直。 \n 鍵合 \xa0 ：創建焊接並將零件焊接在一起以作為單個對象移動。 \n 居中 \xa0 ：對象將在其他對象之間居中，即沿槽定位圓柱體 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 並將圓柱體在插槽中居中。 \n \n 角度 \xa0 ：這將在組件上選擇的兩個對象實體之間固定一個恆定的角度 \n \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 組裝。 \n \n 6.5範例 \n 組裝葉輪組件。 \n 其中建模了所有組件， 現在我們必須將它們插入組裝環境並應用將它們相對放置的約束。 組裝完成後，我們可以創建分解圖並準備繪圖。 \n 在開始裝配建模之前，請在 Hexabolt 的葉輪下部殼體和葉輪上部殼體的每一側上分別製造三個通孔（每個殼體總共 6 個孔）。 孔的直徑應為 0.25。 \n \n 6.5.1 開始組裝 \n ➢創建一個新文件 \n ➢在模型選項卡下選擇裝配 \n ➢將單位設置為英寸 \n ➢命名為 Impeller_assembly.prt \n \n 或者，如果您在“建模應用程序”中並想要開始組裝， \n ➢在應用程序選項卡中打開程序集選項，然後會出現一個新的程序集選項卡 \n 或者 \n ➢單擊文件→程序集，如下所示 \n ➢主頁菜單欄現在將顯示用於組裝的工具 \n 在組件選項中： \n \n “添加”選項添加已創建其零件文件的新零部件對象。 \n “新建”可讓您在裝配文件中創建新的零件幾何體 \n \n 正在使用自頂向下方法進行組裝。 \n 裝配約束允許您創建裝配約束，而移動零部件允許您可以將零部件重新放置在裝配中所需的任何位置。 \n 6.5.2 添加組件和約束 \n ➢選擇添加 \n 右側顯示的對話框將彈出。您可以從現有文件中選擇零件文件（應該已經顯示在“已加載的零件”選項卡中），也可以加載零件文件使用對話框中的打開文件選項。這將加載 \n 選定的零件文件進入“加載的零件”對話框。 \n ➢單擊打開圖標並選擇文件 \n Impeller_upper-casing.prt \n ➢在零件名稱對話框中單擊確定。 \n 然後我們需要設置一個位置來放置坐標系 \n 第一部分的。在位置組框中，保持“裝配位置”選項的默認“捕捉”。 \n ➢單擊選擇對象 \n 現在可以在透明模式下看到零件 \n ➢單擊指向對話框圖標並創建[0， 0 ， 0] 的坐標 \n ➢單擊確定退出點對話框 \n 注意：可以隨意使用“循環方向”選項來設置不同的方向。 \n ➢在“放置”組框中，我們可以定義放置此組件的位置和方式。在這種情況下， \n 我們將保留默認選項。 \n ➢單擊確定退出添加組件對話框 \n 然後，您將看到一個彈出對話框。 \n ➢單擊“是”為該零件創建一個“修復”約束。 \n 讓我們繼續添加第二個組件，即下部外殼。 \n ➢單擊裝配部分中的添加 \n ➢從 Loded Parts 中選擇文件 Impeller_lower-casing.prt 或打開 \n ➢在位置組框中，將選項更改為絕對–工作零件以放置新的部分位於當前工作部分的絕對原點 \n ➢在“放置”組框中，首先切換“移動”單選按鈕並移動下殼體遠離上殼體，以便有足夠的空間選擇配合面。 \n ➢然後，切換約束單選按鈕。現在，讓我們配對上殼體和下殼體。 \n 您可以在“約束類型”框中的下拉菜單中訪問所有約束。 \n 在這裡您可以看到不同的交配類型，上面已經解釋過了部分。 \n ➢確保觸摸對齊圖標為在“類型”對話框中選擇 \n ➢首先，選擇箭頭所在的面。 \n ➢如右圖所示，在屏幕上單擊上殼體的表面。 \n 注意：如果由於零件的位置而難以選擇面，則可以移動 \n 通過在“放置”組框中切換“移動”並操縱其處理程序來調整它們。 \n 讓我們添加另一個“觸摸對齊”約束。 \n ➢確保您仍在使用觸摸對齊 \n ➢單擊上殼體的平面，然後單擊相應的平面。 \n 下殼體相對於上殼體受到約束。 現在讓我們添加葉輪。 \n ➢選擇裝配→零部件→添加以將零部件添加到當前裝配中 \n ➢打開文件 Impeller_impeller.prt \n ➢在對話框中單擊確定 \n ➢選擇絕對–裝配 Locat 的工作零件 \n ➢切換約束按鈕 \n ➢單擊“約束類型”框中的“距離”圖標 \n ➢選擇兩個面，首先在葉輪上，然後在殼體上， \n ➢在“位置”組的“距離”框中，輸入值 3 \n ➢按 Enter 預覽當前裝配 \n 預覽可能會顯示葉輪的方向與我們想要的方向相反。 \n ➢要更改零件的方向或距離方向，請在“放置”窗口中，單擊“要約束的幾何”框中的“循環最後約束”按鈕。 \n 從預覽中檢查裝配狀態，您可能需要單擊多個按鈕次以獲得理想的結果。 現在，葉輪將朝向正確的方向。 \n 現在，我們將使用“中心”約束添加軸。 \n ➢單擊裝配→零部件→添加 \n ➢打開文件 Impeller_shaft.prt \n ➢在對話框中單擊確定 \n ➢在約束中選擇“觸摸對齊”圖標文字框在菜單中選擇推斷中心 / 軸選項幾何約束框 \n ➢選擇兩個表面，首先在軸上，然後在葉輪上 \n ➢保持觸摸對齊約束 \n ➢在“幾何要約束”框中選擇“首選觸摸”選項 \n ➢首先，選擇軸上的面，然後選擇葉輪中孔的底面 \n ➢單擊裝配→零部件→添加 \n ➢打開文件 Impeller_hexa-bolt.prt \n ➢選擇“觸摸對齊”約束。 使用幾何中的推斷中心 / 軸選項約束框 \n ➢首先，選擇螺栓上的外部圓柱螺紋，然後選擇螺栓的內表面。 \n ➢再次在“觸摸對齊”約束中將“將幾何約束為約束”選項更改為“首選”觸摸 \n ➢如圖所示，選擇螺栓上的平面和上殼體肋板上的平面 \n ➢點擊確定 \n ➢重複相同的步驟，在組件的所有孔中添加螺栓和螺母。 \n 這樣就完成了葉輪的組裝。 \n 注意：有一種簡單的方法來組裝螺栓和螺母套件。 而不是添加三個部分 \n 您可以分別將這些組件分別組裝到另一個文件中。 這將是一個子裝配。 您可以插入此子裝配並將其與主裝配配對。 \n 6.5.3 分解圖 \n 在本節中，我們將創建裝配體的分解圖，以顯示組成裝配體的零部件的分離的零件圖片。在當今的工業實踐中，這些此類視圖在裝配車間非常有用，有助於您更好地了解要修復的項目 \n 哪裡。用戶應了解，爆炸裝配並不意味著零件的重新定位。 \n 組件，但只能以拆卸的形式查看模型。您可以取消分解視圖您隨時可以重新獲得原始裝配視圖。讓我們爆炸葉輪組件。 \n ➢選擇菜單→裝配體→分解圖→新爆炸 \n 這將彈出一個對話框，詢問您的名稱。要創建的爆炸視圖。你可以留下名字，作為默認名稱，然後選擇確定，現在， NX 環境處於爆炸視圖中環境，儘管您沒有發現任何區別。當我們開始爆炸裝配時，我們應該確定一個組件以使該組件作為參考。該組件應不能從其原始位置移動。對於葉輪組件，葉輪將是正確的選擇，因為它對於整個裝配至關重要。現在讓我們開始分解這些組件。 \n ➢右鍵單擊上殼體，然後選擇“編輯爆炸” \n “編輯爆炸”窗口將與組件上的坐標手柄一起彈出。 \n ➢點擊 Z 軸； 按住鼠標並向上拖動，直到顯示距離，顯示 -20 （如果設計方向相反，則用 +20 代替） \n ➢點擊確定 \n ➢右鍵單擊下部外殼，然後選擇“編輯爆炸” \n 再次，這將彈出一個對話框，用於編輯爆炸和零件上的坐標系。 \n ➢點擊 Z 軸； 按住鼠標並拖動向下直到距離讀數顯示 20 ，如右圖所示 \n 側。 \n ➢右鍵單擊軸，然後選擇“編輯”爆炸 \n ➢這次點擊 X 軸； 按住按鈕並拖動到右側，直到閱讀 \n 距離顯示為 -25 \n ➢選擇確定 \n ➢單擊組件中的所有六個六角形螺栓 \n ➢右鍵單擊其中之一，然後選擇“編輯爆炸” \n ➢這次單擊 Z 軸； 按住按鈕並向上拖動，直到讀取距離顯示 25 ，如下圖所示。 這將移動所有六個螺栓在一起到相同的距離。 \n ➢選擇確定 \n ➢同樣，將六個墊圈和六個六角螺母向下移至 -30 和 -35 ，分別是裝配體的分解圖。 您可以旋轉並查看其外觀。 \n 如果您想回到原始的未爆炸視圖， \n ➢單擊功能區中的爆炸視圖→從下拉菜單中選擇（無爆炸） \n 如下所示，您可以取消分解裝配中的任何零部件， \n ➢右鍵單擊該組件，然後選擇“展開”。 \n 如果要解開所有組件 \n ➢選擇裝配體→爆炸視圖→展開零件 \n \n 6.6練習 \n 6.6.1 刀桿壓機 \n 在本教程的前面各節中，我們對各個部分進行了建模，其中一些是手動壓榨機的組件如下所示。使用以下組件組裝手壓機除了提供給您的模型（以前從未建模）之外，您還進行了建模。 \n 下文提供了手動壓榨機總成零件的完整列表。所有這些部分都是提供在一個文件夾中，該文件夾可以與本教程一起在同一 Internet 地址中訪問 \n （ https://web.mst.edu/~mleu/ ）。 \n \n 艾倫·博爾特 \n 艾倫堅果 \n 基礎 \n 圓底 \n 尾夾 \n 提手 \n 六角螺栓 \n L 型桿 \n 銷 \n 小齒輪 \n 小齒輪手柄 \n 盤子 \n 機架 \n 袖長 \n \n \n 6.6.2 蝶閥 \n 蝶閥是控制流量最常用的設備之一。蝶閥由位於管道中的旋轉盤組成。光盤安裝在所連接的軸上 \n 到閥門外部的執行器上。旋轉致動器可以使光盤平行或平行旋轉垂直於流動。閥門關閉後，將閥瓣旋轉，使其完全阻塞離開通道。當閥門完全打開時，閥瓣旋轉四分之一圈，以便流體幾乎不受限制地通過。閥門也可以逐漸打開以調節流。 \n 在本練習中，您將建模和組裝由 9 個不同零件組成的蝶形閥，用於共有 12 個組件。 以及不同零件的名稱，圖紙和尺寸提供各種組件如何裝配在一起的信息。 沒有圖紙的零件給定的設計或選擇，例如圓頭機螺釘。 所有尺寸以英寸為單位。 \n \n \n \n \n \n 6.6.3 Jackscrew \n 千斤頂螺釘是一種通過轉動導螺桿來操作的千斤頂。 在這個練習中，要求您對零件進行建模，組裝和準備。 所有尺寸應以毫米為單位。 為每個創建單獨的草稿零件。 起草最終裝配並製作表格，列出每個人組件。 大會草案應有分解圖。 \n \n \n 以下是影片(開cc字幕) \n \n webot tutorial - 1 \n 1.建立資料夾 \n 2.建一個新世界 \n 3.先加號加入一個木箱並修改其尺寸 \n 4.添加完成了之後我們要複製三個木箱 \n 5.添加e-puck robot並且啟動試試看是否可以運動 \n 6.增加控制器操縱e-puck robot添加指令後機器人應該會直走並旋轉後停下 \n 7.修改這個控制器的功能貼上另一個指令如果成功機器人因該會緩慢行走 \n 8.修改機器人馬達使其達原地旋轉 \n v-rep tutorial - bubbleRob \n 1.建一圓球作機器人本體 \n 2.將感測器設好並且裝上機器人然後去定義其範圍 \n 3.將左輪裝上並且把座標調整到適當位置，調整完之後將參數都設置好 \n 4.調整好之後我們需要裝上右輪 \n 5.增加第三個支點 \n 6.增加一個小球當作機器人的支點 \n 7.增加動力源並且設置好動力源的座標 \n 8.左右輪也必須加上馬達當作動力源 \n 9.設定都好了之後記得要將剛剛設定的東西都拉到bubbleRob底下才會跟著本體作動 \n 10.設定障礙物將本體圍繞起來 \n 11.設定運動時的動態圖表 \n 12設定攝像頭以便機器人移動時看到與他平行的影像 \n 13.將BubbleRob的程式碼功能打開並且將程式碼複製貼入到裡面 \n 14.正常狀態下機器人因該會在感測器照射到物體的情況下往後退並迴避 \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};