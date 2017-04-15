$(document).ready(function(){
				$('select').material_select();
			});

			function next(){
				activeTab = $("ul.tabs").find(".active").attr('href');
				newTab = Number(activeTab.substr(1,1));
				if (newTab == 4)
					newTab = 1;
				else
					newTab++;
				 $('ul.tabs').tabs('select_tab', newTab);
			}

			function convertVol(u1, u2, vol){
				toLitreMatrix = {"US liquid gallon":3.78541, "US liquid quart":0.946353, "US liquid pint":0.473176, "US legal cup":0.24, "US fluid ounce":0.0295735, "US tablespoon":0.0147868, "US teaspoon":0.00492892, "Cubic metre":1000, "Litre":1, "Millilitre":0.001, "Imperial gallon":4.54609, "Imperial quart":1.13652, "Imperial pint":0.568261, "Imperial cup":0.284131, "Imperial fluid ounce":0.0284131, "Imperial tablespoon":0.0177582, "Imperial teaspoon":0.00591939, "Cubic foot":28.3168, "Cubic inch":0.0163871}
				volInLitre = vol * toLitreMatrix[u1];
				return volInLitre * (1/ toLitreMatrix[u2]);

			}

			function convertSpeed(u1, u2, speed){
				toMperSMatrix = {"Miles per hour":0.44704, "Foot per second":0.3048, "Metre per second":1, "Kilometre per hour":0.277778, "Knot":0.514444}
				sInMperS = speed * toMperSMatrix[u1];
				return sInMperS * (1/ toMperSMatrix[u2]);

			}

			function convertPressure(u1, u2, pressure){
				toPaMatrix = {"Atmosphere":101325, "Bar":100000, "Pascal":1, "Pound-force per square inch":6894.76, "Torr":133.322}
				presToPa = pressure * toPaMatrix[u1];
				return presToPa * (1/ toPaMatrix[u2]);

			}

			function convertMass(u1, u2, mass){
				toGramMatrix = {"Tonne":1000000, "Kilogram":1000, "Gram":1, "Milligram":0.001, "Microgram":0.000001, "Imperial ton":1016000, "US ton":907185, "Stone":6350.29, "Pound":453.592, "Ounce":28.3495}
				massInGram = mass * toGramMatrix[u1];
				return massInGram * (1/ toGramMatrix[u2]);

			}

			function convertLen(u1, u2, len){
				toMetreMatrix = {"Kilometre":1000, "Metre":1, "Centimetre":0.01, "Millimetre":0.001, "Micrometre":0.000001, "Nanometre":0.000000001, "Mile":1609.34, "Yard":0.9144, "Foot":0.3048, "Inch":0.0254, "Nautical mile":1852}
				lenToM = len * toMetreMatrix[u1];
				return lenToM * (1/toMetreMatrix[u2]);
			}

			function convertFuleEcon(u1, u2, f){
				toKmPerLMatrix = {"US Miles per gallon":0.425144, "Miles per gallon (Imperial)":0.354006, "Kilometre per litre":1, "Litre per 100 kilometres":100}
				fInKmPerL = f * toKmPerLMatrix[u1];
				return fInKmPerL * (1/ toKmPerLMatrix[u2]);

			}


			function convertFrequency(u1, u2, fr){
				toHertzMatrix = {"Hertz":1, "Kilohertz":1000, "Megahertz":1000000, "Gigahertz":1000000000}
				frInHz = fr * toHertzMatrix[u1];
				return frInHz * (1/toHertzMatrix[u2]);
			}

			function convertEnergy(u1, u2, energy){
				toJouleMatrix = {"Joule":1, "Kilojoule":1000, "Gram calorie":4.184, "Kilocalorie":4184, "Watt hour":3600, "Kilowatt hour":3600000, "Electronvolt":1.6022E-19, "British thermal unit":1055.06, "US therm":105500000, "Foot-pound":1.35582}
				energyInJoules = energy * toJouleMatrix[u1];
				return energyInJoules * (1/ toJouleMatrix[u2]);
			}

			function convertStorage(u1, u2, space){
				toByteMatrix = {"Bit":0.125, "Kilobit":125, "Kibibit":128, "Megabit":125000, "Mebibit":131072, "Gigabit":125000000, "Gibibit":134200000, "Terabit":125000000000, "Tebibit":137400000000, "Petabit":125000000000000, "Pebibit":140700000000000, "Byte":1, "Kilobyte":1000, "Kibibyte":1024, "Megabyte":1000000, "Mebibyte":1049000, "Gigabyte":1000000000, "Gibibyte":1074000000, "Terabyte":1000000000000, "Tebibyte":1100000000000, "Petabyte":1000000000000000, "Pebibyte":1126000000000000};
				spaceInBytes = space * toByteMatrix[u1];
				return spaceInBytes * (1/toByteMatrix[u2]);
			}

			function convertDataTransferRate(u1, u2, rate){
				toMegabytePerSec = {"Bit per second":0.000000125, "Kilobit per second":0.000125, "Kilobyte per second":0.001, "Kibibit per second":0.000128, "Megabit per second":0.125, "Megabyte per second":1, "Mebibit per second":0.131072, "Gigabit per second":125, "Gigabyte per second":1000, "Gibibit per second":134.218, "Terabit per second":125000, "Terabyte per second":1000000, "Tebibit per second":137439};
				rateInMegabytePerSec = rate * toMegabytePerSec[u1];
				return rateInMegabytePerSec * (1/toMegabytePerSec[u2]);
			}

			function convertArea(u1, u2, area){
				toSquareMetreMatrix = {"Square kilometre":1000000, "Square metre":1, "Square mile":2590000, "Square yard":0.836127, "Square foot":0.092903, "Square inch":0.00064516, "Hectare":10000, "Acre":4046.86}
				areaInSquareMetre = area * toSquareMetreMatrix[u1];
				return areaInSquareMetre * (1/toSquareMetreMatrix[u2]);
			}

			function convertAngle(u1, u2, theta){
				toDegMatrix = {"Degree":1, "Gradian":0.9, "Milliradian":0.0572958, "Minute of arc":0.0166666667, "Radian":57.2958, "Second of arc":0.0002777778};
				thetaInDeg = theta * toDegMatrix[u1];
				return thetaInDeg * (1/ toDegMatrix[u2]);
			}
			
			function convertTime(u1, u2, time){
				toSecondMatrix = {"Nanosecond":0.000000001, "Microsecond":0.000001, "Millisecond":0.001, "Second":1,"Minute":60, "Hour":3600, "Day":86400, "Week":604800, "Month":2628000, "Year":31540000, "Decade":315400000, "Century":3145000000};
				timeInSec = time * toSecondMatrix[u1];
				return timeInSec * (1/ toSecondMatrix[u2]);
			}

			function convertTemp(u1, u2, temp){
				if (u1 == "Kelvin"){
					if (u2 == "Celsius"){
						return temp - 273.15;
					}else if (u2 == "Fahrenheit"){
						return (temp - 273.15) * 9/5 + 32;
					}
				}else if (u1 == "Celsius"){
					if (u2 == "Kelvin"){
						return temp + 273.15;
					}else if (u2 == "Fahrenheit"){
						return temp * (9/5) + 32;
					}
				}else if (u1 == "Fahrenheit"){
					if (u2 == "Celsius"){
						return (temp - 32) * (5/9);
					}else if (u2 == "Kelvin"){
						return (temp - 32) * (5/9) + 273.15;
					}
				}else
					return "Error"
			}

			function convert(){
				if ($("#type").val() == null || $("#unit1").val() == null || $("#unit2").val() == null || $("#val1").val() == null || $("#val1").val() == ""){
					$("#4").html("One or more feilds have not been filled in...");
					return;
				}

				//Do the conversion
				type = $("#type").val();
				unit1 = $("#unit1").val();
				unit2 = $("#unit2").val();
				val1 = $("#val1").val();

				result = ""
				if (unit1 == unit2){
					result = val1
				}else{
					switch(type){
						case "Area":
							result = convertArea(unit1, unit2, val1);
							break;
						case "Data Transfer Rate":
							result = convertDataTransferRate(unit1, unit2, val1);
							break;
						case "Digital Storage":
							result = convertStorage(unit1, unit2, val1);
							break;
						case "Energy":
							result = convertEnergy(unit1, unit2, val1);
							break;
						case "Frequency":
							result = convertFrequency(unit1, unit2, val1);
							break;
						case "Fuel Economy":
							result = convertFuleEcon(unit1, unit2, val1);
							break;
						case "Length":
							result = convertLen(unit1, unit2, val1);
							break;
						case "Mass":
							result = convertMass(unit1, unit2, val1);
							break;
						case "Plane Angle":
							result = convertAngle(unit1, unit2, val1);
							break;
						case "Pressure":
							result = convertPressure(unit1, unit2, val1);
							break;
						case "Speed":
							result = convertSpeed(unit1, unit2, val1);
							break;
						case "Temperature":
							result = convertTemp(unit1, unit2, val1);
							break;
						case "Time":
							result = convertTime(unit1, unit2, val1);
							break;
						case "Volume":
							result = convertVol(unit1, unit2, val1);
							break;
					}
				}

				$("#4").html(val1 + " " + unit1 + " = " + result + " " + unit2);
			}

			function changeType(){
				selected = $("#type").val();
				options = "<option value='' disabled selected> Choose your option</option>"
				switch(selected){
					case "Area":
						options += "<option>Square kilometre</option><option>Square metre</option><option>Square mile</option><option>Square yard</option><option>Square foot</option><option>Square inch</option><option>Hectare</option><option>Acre</option>"
						break;
					case "Data Transfer Rate":
						options += "<option>Bit per second</option><option>Kilobit per second</option><option>Kilobyte per second</option><option>Kibibit per second</option><option>Megabit per second</option><option>Megabyte per second</option><option>Mebibit per second</option><option>Gigabit per second</option><option>Gigabyte per second</option><option>Gibibit per second</option><option>Terabit per second</option><option>Terabyte per second</option><option>Tebibit per second</option>"
						break;
					case "Digital Storage":
						options += "<option>Bit</option><option>Kilobit</option><option>Kibibit</option><option>Megabit</option><option>Mebibit</option><option>Gigabit</option><option>Gibibit</option><option>Terabit</option><option>Tebibit</option><option>Petabit</option><option>Pebibit</option><option>Byte</option><option>Kilobyte</option><option>Kibibyte</option><option>Megabyte</option><option>Mebibyte</option><option>Gigabyte</option><option>Gibibyte</option><option>Terabyte</option><option>Tebibyte</option><option>Petabyte</option><option>Pebibyte</option>"
						break;
					case "Energy":
						options += "<option>Joule</option><option>Kilojoule</option><option>Gram calorie</option><option>Kilocalorie</option><option>Watt hour</option><option>Kilowatt hour</option><option>Electronvolt</option><option>British thermal unit</option><option>US therm</option><option>Foot-pound</option>"
						break;
					case "Frequency":
						options += "<option>Hertz</option><option>Kilohertz</option><option>Megahertz</option><option>Gigahertz</option>"
						break;
					case "Fuel Economy":
						options += "<option>US Miles per gallon</option><option>Miles per gallon (Imperial)</option><option>Kilometre per litre</option><option>Litre per 100 kilometres</option>"
						break;
					case "Length":
						options += "<option>Kilometre</option><option>Metre</option><option>Centimetre</option><option>Millimetre</option><option>Micrometre</option><option>Nanometre</option><option>Mile</option><option>Yard</option><option>Foot</option><option>Inch</option><option>Nautical mile</option>"
						break;
					case "Mass":
						options += "<option>Tonne</option><option>Kilogram</option><option>Gram</option><option>Milligram</option><option>Microgram</option><option>Imperial ton</option><option>US ton</option><option>Stone</option><option>Pound</option><option>Ounce</option>"
						break;
					case "Plane Angle":
						options += "<option>Degree</option><option>Gradian</option><option>Milliradian</option><option>Minute of arc</option><option>Radian</option><option>Second of arc</option>"
						break;
					case "Pressure":
						options += "<option>Atmosphere</option><option>Bar</option><option>Pascal</option><option>Pound-force per square inch</option><option>Torr</option>"
						break;
					case "Speed":
						options += "<option>Miles per hour</option><option>Foot per second</option><option>Metre per second</option><option>Kilometre per hour</option><option>Knot</option>"
						break;
					case "Temperature":
						options += "<option>Celsius</option><option>Fahrenheit</option><option>Kelvin</option>"
						break;
					case "Time":
						options += "<option>Nanosecond</option><option>Microsecond</option><option>Millisecond</option><option>Second</option><option>Minute</option><option>Hour</option><option>Day</option><option>Week</option><option>Month</option><option>Year</option><option>Decade</option><option>Century</option>"
						break;
					case "Volume":
						options += "<option>US liquid gallon</option><option>US liquid quart</option><option>US liquid pint</option><option>US legal cup</option><option>US fluid ounce</option><option>US tablespoon</option><option>US teaspoon</option><option>Cubic metre</option><option>Litre</option><option>Millilitre</option><option>Imperial gallon</option><option>Imperial quart</option><option>Imperial pint</option><option>Imperial cup</option><option>Imperial fluid ounce</option><option>Imperial tablespoon</option><option>Imperial teaspoon</option><option>Cubic foot</option><option>Cubic inch</option>"
						break;
				}

				$("#unit1, #unit2").html(options)
				$('#unit1, #unit2').material_select();
			}
