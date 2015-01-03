;(function(){
	console.log('Loading brush-glsl.js');
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null);

	function Brush(){
		console.log('Constructing Brush for glsl');
		var datatypes = 'mat 4 vec2 vec3 vec4 void';
		var keywords = 'gl_Position in out uniform';
		var functions = 'sin texture';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,  css: 'comments' },
			{ regex: /^ *#.*/gm,                                     css: 'preprocessor' },
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),  css: 'color1 bold' },
			{ regex: new RegExp(this.getKeywords(functions), 'gm'),  css: 'functions bold' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),   css: 'keyword bold' }
		];
	}

	Brush.prototype = new SyntaxHighlighter.Highlighter();
	Brush.aliases = ['glsl'];

	SyntaxHighlighter.brushes.Glsl = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
