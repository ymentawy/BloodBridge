//
//  ContentView.swift
//  Practice
//
//  Created by muhammad abdelmohsen on 06/07/2023.
//

import SwiftUI
import Foundation
import MapKit


struct ContentView: View {
    var body: some View {
        HStack(alignment: .top, content: {
            User_View()
           
        })
    }
}


struct WelcomeMenu: View {
    @State private var isListOfHospitalPresented = false
    @State private var IsListOfBloodDrives = false
    @State private var isConfirmed = false
    @State private var isProfileShown = false
    @State private var userName: String = "Mohamed"
    @State private var selectedhosp: String = ""
    @State private var gender = false
    @State private var selectedGender: String = ""
    @State private var showprofile = false
    @State private var showHospitalAlert = false
    @State private var BacktoUserView = false
    @State private var NavigateToWelcome = false
    @State private var selectedOption: Int?
    @State private var isAlertPresented = false
    @State private var isSystemMode = false
    @State private var isDarkMode = false

    
    
    var body: some View {
        VStack {
            HStack {
                Button(action: {
                    showprofile.toggle()
                    
                }) {
                    Image(systemName: "person.circle")
                        .aspectRatio(contentMode: .fit)
                        .padding(.all, 5.0)
                    .font(.system(size: 20)) // Adjust the font size
                    .background(Color.white)
                    .foregroundColor(.black)
                    .cornerRadius(10)
                    .shadow(color: .gray, radius: 5, x: 0, y: 5)
                    
                }.padding(.leading, 300.0)
                    .padding(.top, -70)
                .background(
                
                NavigationLink("", destination: ProfileView(UserNames: "Mohamed Abdelmohsen", Email: "Abdelmohsen@aucegypt.edu", Phone: "01110966552", Age: 21, Gender: "Male")
                               , isActive: $showprofile)
                .navigationBarBackButtonHidden(true)
                .navigationBarTitle("", displayMode: .inline) // Clear the title
                ) // Align to the trailing edge
            }
            Text("Hello, \(userName)")
                .font(.largeTitle)
                .fontWeight(.heavy)
                .padding(.bottom,20)
                .foregroundColor(.black)
                .frame()
                .shadow(color: .gray, radius: 20)
            
            Image("mainbloocpic").resizable().aspectRatio(contentMode: .fit).padding()
            
            Button(action: {
                    isAlertPresented = true
                }) {
                    Text("Donate Now!")
                        .font(.headline)
                        .padding()
                        .background(Color.red)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .cornerRadius(15)
                        .shadow(color: .gray, radius: 5, x: 0, y: 5)
                }
                .alert(isPresented: $isAlertPresented) {
                    Alert(
                        title: Text("Choose Donation Type"),
                        message: Text("Select an option to proceed."),
                        primaryButton: .default(Text("Bloodmobiles").foregroundColor(.blue)) {
                            selectedOption = 1
                            IsListOfBloodDrives.toggle()
                        },
                        secondaryButton: .default(Text("Hospitals").foregroundColor(.green)) {
                            selectedOption = 2
                            isListOfHospitalPresented.toggle()
                        }
                    )
                }

                .background(
                    NavigationLink(destination: HospitalListView(selectedHospitals: $selectedhosp), isActive: $isListOfHospitalPresented) {
                        EmptyView()
                    }
                )
                .background(
                    NavigationLink(destination: BloodDriveView(), isActive: $IsListOfBloodDrives) {
                        EmptyView()
                    }
                )

            Button(action:{
                BacktoUserView=true
                
            }){
                
                Text("Sign out")
                    .padding()
                    .font(.headline)
                    .fontWeight(.semibold)
                    .foregroundColor(.black)
                    .frame(height: 50)
                    .background(Color.white) // Background color
                    .cornerRadius(15) // Round the corners
                    .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                
            }.background(
                NavigationLink("", destination: User_View(), isActive: $BacktoUserView)
                    .navigationTitle("")
                
            )                    .navigationBarBackButtonHidden(false)
           
            
        }
        
        
    }
}
    

struct HospitalListView: View {
    @Binding var selectedHospitals: String
    @State var isProfileShown = false
    @State private var showHospitalAlert=false
    @State private var NavigateToWelcome=false
    let Hospitals = ["Dar El-Fouad", "Army Forces Hospital", "Salam Maadi Hospital","Haram Hopital", "Nasayem", "Souad Kafafi Hospital"]
    var body: some View {
        Text("Please choose a hospital to donate to").font(.title3).foregroundColor(.black).fontWeight(.semibold)
        VStack{
            
            List(Hospitals, id: \.self) { hospital in
                Button(action: {
                    selectedHospitals = hospital
                }) {
                    HStack {
                        Text(hospital).foregroundColor(.red)
                        Spacer()
                        if selectedHospitals == hospital {
                            Image(systemName: "checkmark")
                        }
                    }
                }
            }
            NavigationLink(destination: WelcomeMenu(), isActive: $NavigateToWelcome) {
                Button(action: {
                    showHospitalAlert = true
                }) {
                    Text("Confirm donation")
                        .font(.headline)
                        .padding()
                        .background(Color.red)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .cornerRadius(15) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                }
                .alert(isPresented: $showHospitalAlert) {
                    Alert(title: Text(""), message: Text("\(selectedHospitals) will Contact you soon"), dismissButton: .default(Text("OK")) {
                        NavigateToWelcome = true
                    })
                }
            }
            
        }
        
    }
}
struct BloodDriveView: View {
   
    @State private var showingMap1 = false
    @State private var showingMap2 = false
    @State private var showingMap3 = false
    @State private var showingMap4 = false
    @State private var showingMap5 = false
    @State private var showingMap6 = false


    var body: some View {
          
        VStack (spacing:2){
                Text("Please check each bloodmobiles locations")
                .fontWeight(.semibold)
                .font(.headline)
                .padding()
            
            Text("\(Image(systemName: "exclamationmark.triangle.fill")) Donation is only available at the location of the BloodMobile")
                .fontWeight(.light)
                .font(.headline)
                .padding()


            HStack {
                Button(action: {
                    //                        BloodDrive1.toggle()
                    showingMap1.toggle()
                }, label: {
                    Text("Rehab Bloodmobile")
                        .font(.headline)
                        .padding()
                        .background(Color.red)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .cornerRadius(15)
                        .shadow(color: .gray, radius: 5, x: 0, y: 5)
                }) .background(
                    NavigationLink("", destination:MapView(isPresented: $showingMap1, Location: "El-Rehab, New Cairo", annotationItems: [MyAnnotationItem(coordinate: CLLocationCoordinate2D(latitude: 30.0660, longitude: 31.4856))
                                                                                                                                        ]), isActive: $showingMap1)
                    
                )
                .padding()
                
            }
            
            HStack{

                    Button(action: {
                        showingMap2.toggle()
                    }, label: {
                        Text("Dokki Bloodmobile")
                            .font(.headline)
                            .padding()
                            .background(Color.red)
                            .foregroundColor(.white)
                            .cornerRadius(10)
                            .fontWeight(.bold)
                            .cornerRadius(15)
                            .shadow(color: .gray, radius: 5, x: 0, y: 5)
                    }).padding()
                        .background(
                            NavigationLink("", destination:MapView(isPresented: $showingMap2, Location:"Dokki, Giza", annotationItems: [MyAnnotationItem(coordinate: CLLocationCoordinate2D(latitude: 32, longitude: 28))
                        ]), isActive: $showingMap2)
                            
                        )
                }

            HStack {
                Button(action: {
                    showingMap3.toggle()
                }, label: {
                    Text("Agouza Bloodmobile")
                        .font(.headline)
                        .padding()
                        .background(Color.red)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .cornerRadius(15)
                        .shadow(color: .gray, radius: 5, x: 0, y: 5)
                }).padding()
                    .background(
                        NavigationLink("", destination:MapView(isPresented: $showingMap3, Location: "Agouza, Giza", annotationItems: [MyAnnotationItem(coordinate: CLLocationCoordinate2D(latitude: 30.0511, longitude: 31.2126))
                                                                                                                                     ]), isActive: $showingMap3)
                    )
            }
                    HStack{
                    Button(action: {
                        showingMap4.toggle()
                    }, label: {
                        Text(" 5th Settlement Bloodmobile")
                            .font(.headline)
                            .padding()
                            .background(Color.red)
                            .foregroundColor(.white)
                            .cornerRadius(10)
                            .fontWeight(.bold)
                            .cornerRadius(15)
                            .shadow(color: .gray, radius: 5, x: 0, y: 5)
                    }).padding()
                                .background(
                                    NavigationLink("", destination:MapView(isPresented: $showingMap4, Location: "5th Settlement, New Cairo",annotationItems: [MyAnnotationItem(coordinate: CLLocationCoordinate2D(latitude: 30.0085, longitude: 31.4285))
                                ]), isActive: $showingMap4)
                                    )
                }
            HStack {
                Button(action: {
                    showingMap5.toggle()
                }, label: {
                    Text(" Zayed Bloodmobile")
                        .font(.headline)
                        .padding()
                        .background(Color.red)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .cornerRadius(15)
                        .shadow(color: .gray, radius: 5, x: 0, y: 5)
                }).padding()
                    .background(
                        NavigationLink("", destination:MapView(isPresented: $showingMap5, Location: "El-Sheikh Zayed, 6th of October", annotationItems: [MyAnnotationItem(coordinate: CLLocationCoordinate2D(latitude: 30.0492, longitude: 30.9762))
                                                                                                                                                        ]), isActive: $showingMap5)
                    )
            }
            HStack{
                    Button(action: {
                        showingMap6.toggle()
                    }, label: {
                        Text("Haram Bloodmobile")
                            .font(.headline)
                            .padding()
                            .background(Color.red)
                            .foregroundColor(.white)
                            .cornerRadius(10)
                            .fontWeight(.bold)
                            .cornerRadius(15)
                            .shadow(color: .gray, radius: 5, x: 0, y: 5)
                    }).padding()
                                .background(
                                    NavigationLink("", destination:MapView(isPresented: $showingMap6, Location: "Haram, Giza", annotationItems: [MyAnnotationItem(coordinate: CLLocationCoordinate2D(latitude: 29.977966, longitude: 31.134726))
                                ]), isActive: $showingMap6)
                                    )
                }
                
                Spacer()
        }
 }
}

struct BloodTypeSelectionView: View {
    @Binding var selectedBloodType: String
    @State var selectedGender: String = ""
    
    let bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    
    var body: some View {
        VStack {
            Text("Please Choose Your Blood Type").fontWeight(.bold).foregroundColor(.black)
            
            List(bloodTypes, id: \.self) { bloodType in
                Button(action: {
                    selectedBloodType = bloodType
                }) {
                    HStack {
                        Text(bloodType).foregroundColor(.red)
                        Spacer()
                        if selectedBloodType == bloodType {
                            Image(systemName: "checkmark")
                        }
                    }
                }
            }
            
            NavigationLink(
                destination: GenderSelectionView(selectedGender: $selectedGender),
                label: {
                    Text("Next")
                        .font(.headline)
                        .padding()
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                        .frame(maxWidth: 150)
                        .frame(height: 50)
                        .background(Color.red)
                        .cornerRadius(20)
                        .shadow(color: .gray, radius: 5, x: 0, y: 5)
                        .padding()
                }
            )
            
            
        }
        
    }
}

   
struct ProfileView: View {
    
    @State var UserNames: String
    @State var Email: String
    @State var Phone: String
    @State var Age: Int
    @State var Gender: String
    
    var body : some View {
        ScrollView {
            VStack(spacing: 30) {
                Text("Your Profile").padding()
                    .font(.title3)
                    .fontWeight(.bold)
                    .foregroundColor(.black)
                    .frame(maxWidth: .infinity).frame(height: 30).padding()
                    .background(.white)
                    .cornerRadius(30)
                    .shadow(color: .gray, radius: 5, x: 0, y: 5)
                Image ("me").resizable()
                    .aspectRatio(contentMode: .fit)
                    .padding(1).frame(width: 200, height: 300).cornerRadius(8)
                    
                ProfileInfoView(title: "Name:", content: UserNames)
                ProfileInfoView(title: "Email:", content: Email)
                ProfileInfoView(title: "Phone:", content: Phone)
                ProfileInfoView(title: "Age:", content: "\(Age)").fontWeight(.heavy)
                               
            }
        }
    }
}

struct ProfileInfoView: View {
    var title: String
    var content: String
    
    var body: some View {
        HStack {
            Text(title)
                .font(.system(size: 18))
                .fontWeight(.bold)
                .foregroundColor(.red)
                .padding(.horizontal, 10)
            
            Text(content)
                .font(.system(size: 18))
                .fontWeight(.bold)
                .foregroundColor(.black)
            
            Spacer()
        }
        .background(
            RoundedRectangle(cornerRadius: 10)
                .fill(Color.white)
                .shadow(radius: 3)
        )
        .padding(.horizontal, 20)
    }
}


struct GenderSelectionView: View {
    @Binding var selectedGender: String
    let Genders = ["Female", "Male", "Prefer not to say"]
    @State var Isalert = false
    @State var navigateToLogin = false
    
    var body: some View {
        Text("Please Choose Your Gender")
            .fontWeight(.bold)
            .foregroundColor(.black)
            .padding()
        
        List(Genders, id: \.self) { gender in
            Button(action: {
                selectedGender = gender
            }) {
                HStack {
                    Text(gender)
                        .foregroundColor(.red)
                    Spacer()
                    if selectedGender == gender {
                        Image(systemName: "checkmark")
                    }
                }
            }
        }
        NavigationLink(destination: LOGINview(), isActive: $navigateToLogin) {
            Button(action: {
                Isalert = true
            }) {
                Text("Create Account")
                    .foregroundColor(.red)
                    .fontWeight(.bold)
                    .frame(maxWidth: 200)
                    .frame(height: 50)
                    .background(Color.white)
                    .cornerRadius(15)
                    .shadow(color: .gray, radius: 5, x: 0, y: 5)
                    .padding()
            }
            .alert(isPresented: $Isalert) {
                Alert(title: Text(""), message: Text("Your Account has been created!"), dismissButton: .default(Text("OK")) {
                    navigateToLogin = true
                })
                
            }
        }
    }
}


                   
    
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .preferredColorScheme(.light)
        ContentView()
            .preferredColorScheme(.dark)
    }
}
    

