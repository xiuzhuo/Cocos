var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    ChessBoard_png:"res/ChessBoard.png",
    Football_0_png:"res/Football_0.png"
};

var res_piece={
	PawnWhite:"res/pieces/PawnWhite.png",
	PawnBlack:"res/pieces/PawnBlack.png",
}

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}