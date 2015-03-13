var POSITION_X=["a","b","c","d","e","f","g","h"];

var POSITION_Y=[1,2,3,4,5,6,7,8];

var PIECES={
	PawnWhite0:{
		texture:res_piece.PawnWhite,
		sprite:null,
		position_x:1,
		position_y:0
	},
	PawnWhite1:{
		texture:res_piece.PawnWhite,
		sprite:null,
	},
	PawnWhite2:{
		texture:res_piece.PawnWhite,
		sprite:null,
	},
	PawnWhite3:{
		texture:res_piece.PawnWhite,
		sprite:null,
	},
	PawnWhite4:{
		texture:res_piece.PawnWhite,
		sprite:null,
	},
	PawnWhite5:{
		texture:res_piece.PawnWhite,
		sprite:null,
	},
	PawnWhite6:{
		texture:res_piece.PawnWhite,
		sprite:null,
	},
	PawnWhite7:{
		texture:res_piece.PawnWhite,
		sprite:null,
	},
	PawnBlack0:{
		texture:res_piece.PawnBlack,
		sprite:null,
	}
}


var Piece=cc.Sprite.extend(	
{	
	length:0,
	ctor:function(piece){
		this._super(piece.texture);
	},
	setLength:function(length){
		this.setScale(0.5);
	}
	
});