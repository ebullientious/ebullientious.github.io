montageDefine("00b8c27","core/serialization",{dependencies:["./serialization/serializer/montage-serializer","./serialization/deserializer/montage-deserializer"],factory:function(e,t){var n=e("./serialization/serializer/montage-serializer").MontageSerializer,i=e("./serialization/serializer/montage-serializer").serialize,r=e("./serialization/deserializer/montage-deserializer").MontageDeserializer,a=e("./serialization/deserializer/montage-deserializer").deserialize;t.Serializer=n,t.serialize=i,t.Deserializer=r,t.deserialize=a}});