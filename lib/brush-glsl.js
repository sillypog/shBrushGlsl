;(function(){
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null);

	function Brush(){
		var nDataTypes = ['bvec', 'ivec', 'uvec', 'vec', 'dvec', 'mat'];
		var dataTypesArray = ['bool', 'int', 'uint', 'float', 'double', 'struct', 'void'];
		for (var i=0, l=nDataTypes.length; i<l; i++){
			for (var j=2; j<5; j++){
				dataTypesArray.push(nDataTypes[i]+j);

				if (nDataTypes[i] == 'mat'){
					for (var k=2; k<5; k++){
						dataTypesArray.push(nDataTypes[i]+j+'x'+k);
					}
				}
			}
		}

		var datatypes = dataTypesArray.join(' ');
		var keywords = 'gl_ClipDistance glCullDistance glFragCoord gl_FragDepth gl_FrontFacing gl_GlobalInvocationId gl_HelperInvocation gl_InstanceID gl_InvocationID gl_Layer gl_LocalInvocationID gl_LocalInvocationIndex gl_NumSamples gl_NumWorkGroups gl_PatchVerticesIn glPointCoord gl_PointSize gl_Position gl_PrimitiveID glPrimitiveIDIn gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize in out uniform';
		var functions = 'abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor'
		    + 'barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse'
		    + 'cell clamp cos cosh cross'
		    + 'degrees determinant dFdx dFdxCoarse dFdxFine dFdy dFdyCoarse dFdyFine distance dot'
		    + 'EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive equal exp exp2'
		    + 'faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp fwidth fwidthCoarse fwidthFine'
		    + 'greaterThan greaterThanEqual groupMemoryBarrier'
		    + 'imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSamples imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan'
		    + 'ldexp length lessThan lessThanEqual log log2'
		    + 'matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf'
		    + 'noise noise1 noise2 noise3 noise4 normalize not notEqual'
		    + 'outerProduct'
		    + 'packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm packUnorm2x16 packUnorm4x8 pow'
		    + 'radians reflect refract round roundEven'
		    + 'sign sin sinh smoothstep sqrt step'
		    + 'tan tanh texelFetch texelFetchOffset texture textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureQueryLevels textureQueryLod textureSamples textureSize transpose trunc'
		    + 'uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm unpackUnorm2x16 unpackUnorm4x8 usubBorrow';

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
