import React from 'react';
import { View, Image } from 'react-native';

const Grid = ({ grid }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 50 }}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'column' }}>
          {row.map((cell, cellIndex) => {
            let imageUri = '';
            switch (cell) {
              case '.': //Sol
                imageUri = 'https://img.freepik.com/photos-premium/texture-boue-seche-sol-aride-fissures-herbe-croissance_462054-1285.jpg?w=1380';
                break;
              case '#': //Mur
                imageUri = 'https://cdn.discordapp.com/attachments/1041660991345274911/1088017631438716989/1000_F_378156505_gKHLUV1mnym66771n1DsvIEZqxKbogWL.png';
                break;
              case 'X': //Emplacement
                imageUri = 'https://previews.123rf.com/images/pandawild/pandawild1409/pandawild140900190/31773189-bois-caisse-g%C3%A9n%C3%A9r%C3%A9-embauches-texture.jpg';
                break;
              case 'P': //Player
                imageUri = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c45e59c-2a89-461a-9db8-e7d6d56b462b/dcrx7tn-08e6db4f-edfe-4f23-9f28-075890ce22f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjNDVlNTljLTJhODktNDYxYS05ZGI4LWU3ZDZkNTZiNDYyYlwvZGNyeDd0bi0wOGU2ZGI0Zi1lZGZlLTRmMjMtOWYyOC0wNzU4OTBjZTIyZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5pvwciYCMEtKYALi_QDibKf7TBhDvx4yKS0LGbFDR4';
                break;
              case 'C': //Caise
                imageUri = 'https://www.universalis.fr/media_src/fig/de050695.jpg';
                break;
              case 'V': //Caise sur emplacement
                imageUri = 'https://thumbs.dreamstime.com/z/coche-vert-d-isolement-sur-le-fond-transparent-113459362.jpg';
                break;
              case 'Q': //Player sur emplacement
                imageUri = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c45e59c-2a89-461a-9db8-e7d6d56b462b/dcrx7tn-08e6db4f-edfe-4f23-9f28-075890ce22f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjNDVlNTljLTJhODktNDYxYS05ZGI4LWU3ZDZkNTZiNDYyYlwvZGNyeDd0bi0wOGU2ZGI0Zi1lZGZlLTRmMjMtOWYyOC0wNzU4OTBjZTIyZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5pvwciYCMEtKYALi_QDibKf7TBhDvx4yKS0LGbFDR4';
                break;
              default:
                break;
            }
            return (
              <Image
                key={cellIndex}
                source={{ uri: imageUri }}
                style={{ width: 50, height: 50 }}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default Grid;