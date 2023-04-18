var mc = document.getElementById('map_view'), // 지도를 표시할 div 
			mapOptions = { 
			center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
			level: 5 // 지도의 확대 레벨
			};
			
			var maps = new kakao.maps.Map(mc, mapOptions);
			maps.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);

function overlayMap(){
	$("#map_view")[0].setAttribute("class","farms_map overlayed");
}
function relayoutMap(){
	
	maps.relayout();
				var geocoder = new kakao.maps.services.Geocoder();		
			
			
			var farmLoc = document.getElementById('farm_loc_edit').textContent;
			var farmOwner = document.getElementById('farm_owner_edit').textContent;
			
			geocoder.addressSearch(farmLoc, function(result, status) {
			
				if (status === kakao.maps.services.Status.OK) {
			
			        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
			
			        // 결과값으로 받은 위치를 마커로 표시합니다
			        var markers = new kakao.maps.Marker({
			            map: maps,
			            position: coords
			        });
			
			        // 인포윈도우로 장소에 대한 설명을 표시합니다
			        var infowindows = new kakao.maps.InfoWindow({
			            content: '<div style="width:150px;text-align:center;">'+ farmOwner +'농장</div>'
			        });
			        infowindows.open(maps, markers);
			
			        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
			        maps.setCenter(coords);

			        }
				});
				
			$(".overlayButton")[0].setAttribute("style","display:none");
			$("#map_view")[0].setAttribute("class","farms_map");
}	