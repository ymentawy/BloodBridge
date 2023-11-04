//
//  ContentView.swift
//  Practice
//
//  Created by muhammad abdelmohsen on 06/07/2023.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        HStack(alignment: .top, content: {
            User_View()
           
        })
    }
}


struct User_View: View {
    @State private var showNewView  = false
    @State private var showNewView2 = false
    @State private var showNewView3 = false
    
    
    var body: some View {
        NavigationView {
            VStack(spacing: 10) {
               
                Image("BloodIcon-removebg")
                    .resizable()
                    .padding([.leading, .bottom, .trailing], 20.0)
                    .frame(width: 400, height: 320)
                    .alignmentGuide(.top) { _ in 0 } // Aligns the image at the top
                
                NavigationLink(destination: LOGINview(), isActive: $showNewView) {
                    Text("Login")
                        .font(.title3)
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .frame(height: 50)
                        .background(Color.red)
                        .cornerRadius(20) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                        .padding(.horizontal)
                }
                .navigationTitle("")
                
                NavigationLink(destination: SIGNupView(), isActive: $showNewView2) {
                    Text("Not part of BloodBridge?                              Create your Account now")
                        .underline(true)
                        .font(.headline)
                        .fontWeight(.semibold)
                        .foregroundColor(.red)
                        .frame(maxWidth: .infinity)
                        .frame(height: 50)
                        .background(Color.white) // Background color
                        .cornerRadius(20) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                        .padding()
                }
                .navigationTitle("SignUp")
                
                NavigationLink(destination: ForgotPassView(), isActive: $showNewView3) {
                    Text("Forgot Password?")
                        .font(.custom("Times New Roman", size: 15))
                        .underline(true, color: .blue)
                        .foregroundColor(.blue)
                        .padding(-3)
                }
                .navigationTitle("")
            }
        }
    }

    
}
struct LOGINview: View {
    @State private var email: String = ""
    @State private var password: String = ""
    @State private var showMainMenu = false
    
    
    var body: some View {
        ZStack {
            Image("Image 1")
                .resizable()
                .foregroundColor(Color.red)
                .opacity(0.18)
            
            VStack(spacing: 0) {
                ( Text("Log In").padding()
                    .font(.title)
                    .fontWeight(.heavy)
                    .foregroundColor(.black)
                    .frame(height: 30).padding()
                    .background(.white)
                    .cornerRadius(20)
                    .shadow(color: .red, radius: 5, x: 0, y: 5)
                ).padding(.bottom, 70.0)
                
                
                VStack(spacing: 8) {
                    Text("Enter Your Email:")
                        .fontWeight(.bold)
                        .foregroundColor(.red)
                    
                    TextField("Your Email..", text: $email)
                        .frame(maxWidth: /*@START_MENU_TOKEN@*/.infinity/*@END_MENU_TOKEN@*/)
                        .frame(height: 50.0)
                        .padding(.horizontal, 20)
                        .background(Color.white)
                        .cornerRadius(8)
                        .overlay(RoundedRectangle(cornerRadius: 8)
                            .stroke(Color.gray, lineWidth: 1))
                        .padding()
                }
                
                VStack(spacing: 8) {
                    Text("Enter Your Password:")
                        .fontWeight(.bold)
                        .foregroundColor(.red)
                    
                    SecureField("Your Password..", text: $password)
                        .frame(maxWidth: /*@START_MENU_TOKEN@*/.infinity/*@END_MENU_TOKEN@*/)
                        .frame(height: 50.0)
                        .padding(.horizontal, 20)
                        .background(Color.white)
                        .cornerRadius(8)
                        .overlay(RoundedRectangle(cornerRadius: 8)
                            .stroke(Color.gray, lineWidth: 1))
                        .padding()
                }
                
                Button(action: {
                    showMainMenu = true
                }) {
                    Text("Login")
                        .font(.title3)
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .padding(.vertical, 10)
                        .padding(.horizontal, 20)
                        .background(Color.red)
                        .cornerRadius(10)
                }.padding()
                    .background(
                        NavigationLink("", destination: WelcomeMenu()
                            .navigationBarBackButtonHidden(true) // Hide the back button
                                    .navigationBarTitle("") // Clear the title
                                    .navigationBarHidden(false)
                                       ,isActive: $showMainMenu)
                    )
            }
            .padding()
        }
    }
    
}

struct SIGNupView: View {
    @State var email: String = ""
    @State var pass: String = ""
    @State private var Confirmpassword: String = ""
    @State var BLOOD = false
    @State var selectedBloodType:String = ""
    
    
    var body: some View {
        ZStack{ Image("Image 1")
                .renderingMode(.original)
                .resizable()
                .opacity(0.18)
            VStack(spacing:0) {
                
                HStack(spacing:0) {
                    Text("Be part of ")
                        .font(.title3)
                        .fontWeight(.heavy)
                        .foregroundColor(.black) // Set the color of the first part to black
                    
                    Text("BloodBridge")
                        .font(.title3)
                        .fontWeight(.heavy)
                        .foregroundColor(.red) // Set the color of "BloodBridge" to red
                    
                    Text("!")
                        .font(.title3)
                        .fontWeight(.heavy)
                        .foregroundColor(.black) // Set the color of the exclamation mark to black
                }
                .frame(height: 30)
                .padding()
                .background(Color.white) // Set the background color to white
                .cornerRadius(20)
                .shadow(color: .red, radius: 5, x: 0, y: 5)
                .padding(.bottom, 50.0)
                
                
                Text("Enter Your Email")
                    .foregroundColor(.black)
                    .font(.headline)
                    .fontWeight(.semibold)
                    .padding(.top, 20)
                
                TextField("Your Email..", text: $email)
                    .frame(maxWidth: /*@START_MENU_TOKEN@*/.infinity/*@END_MENU_TOKEN@*/)
                    .frame(height: 50.0)
                    .padding(.horizontal, 20)
                    .background(Color.white)
                    .cornerRadius(8)
                    .overlay(RoundedRectangle(cornerRadius: 8)
                        .stroke(Color.gray, lineWidth: 1))
                    .padding()
                
                Text("Enter Your Password")
                    .foregroundColor(.black)
                    .font(.headline)
                    .fontWeight(.semibold)
                
                
                SecureField("Your Password..", text: $pass)
                    .frame(maxWidth: /*@START_MENU_TOKEN@*/.infinity/*@END_MENU_TOKEN@*/)
                    .frame(height: 50.0)
                    .padding(.horizontal, 20)
                    .background(Color.white)
                    .cornerRadius(8)
                    .overlay(RoundedRectangle(cornerRadius: 8)
                        .stroke(Color.gray, lineWidth: 1))
                    .padding()
                
                Text("Confirm Your Password")
                    .foregroundColor(.black)
                    .font(.headline)
                    .fontWeight(.semibold)
                
                
                SecureField("Your Password..", text: $Confirmpassword)
                    .frame(maxWidth: /*@START_MENU_TOKEN@*/.infinity/*@END_MENU_TOKEN@*/)
                    .frame(height: 50.0)
                    .padding(.horizontal, 20)
                    .background(Color.white)
                    .cornerRadius(8)
                    .overlay(RoundedRectangle(cornerRadius: 8)
                        .stroke(Color.gray, lineWidth: 1))
                    .padding()
                
                
                NavigationLink(destination: BloodTypeSelectionView(selectedBloodType:$selectedBloodType), isActive: $BLOOD) {
                    // Button label and styling
                    Text("Next")
                        .font(.custom("Arial", size: 18))
                        .fontWeight(.bold)
                        .foregroundColor(.white)
                        .padding(.vertical, 10)
                        .padding(.horizontal, 20)
                        .cornerRadius(10)
                        .frame(maxWidth: 130)
                        .frame(height: 50)
                        .background(Color.red) // Background color
                        .cornerRadius(15) // Round the corners
                        .shadow(color: .gray, radius: 5, x: 0, y: 5) // Add a shadow effect
                    
                }.navigationTitle("").padding()
                
            }
        }
    }
    
}

struct ForgotPassView: View {
    @State var email: String = ""
    @State var ViewPass = false
    
    var body: some View {
        
        VStack {
            Image("Imageblood")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .padding()
            Text("Trouble with logging in?")
                .font(.custom("Times New Roman", size: 25))
                .fontWeight(.heavy)
                .padding(.bottom, 20)
                .padding(.horizontal, 20)
                .foregroundColor(.red)
            
            Text("Enter your email address, phone number, or username, and we'll send you a link to get back into your account")
                .foregroundColor(.red)
                .font(.custom("Times New Roman", size: 15))
                .padding()
            
            TextField("Your Email..", text: $email)
                .frame(width: 250.0, height: 50.0)
                .padding(.horizontal, 20)
                .background(Color.white) // Set background color
                .cornerRadius(8)
                .overlay(RoundedRectangle(cornerRadius: 8).stroke(Color.black, lineWidth: 1))
                .padding(.bottom, 10)
            
            Button(action: {
                // Action to perform when the button is tapped
                print("Link Sent Successfully")
                ViewPass=true
            }) {
                Text("Send Login Link")
                    .font(.headline)
                    .fontWeight(.bold)
                    .foregroundColor(.white)
                    .padding(.vertical, 10)
                    .padding(.horizontal, 20)
                    .background(Color.red)
                    .cornerRadius(10)
            }
            .padding(.top, 20)
            .alert(isPresented: $ViewPass){
                Alert(
                    title: Text(""),
                    message: Text("Email has been sent successfully")
                )
            }
          
            }
        }
}



struct WelcomeMenu: View {
    @State private var IsListOfHospital = false
    @State private var isConfirmed = false
    @State private var isProfileShown = false
    @State private var userName: String = "User"
    @State private var selectedhosp: String = ""
    @State private var gender = false
    @State private var selectedGender: String = ""
    @State private var showprofile = false
    @State private var showHospitalAlert = false
    
    
    var body: some View {
        NavigationView {
            VStack {
                Text("Hello, \(userName)")
                    .font(.largeTitle)
                    .fontWeight(.heavy)
                    .padding(.bottom,20)
                    .foregroundColor(.red)
                    .frame()
                    .shadow(color: .gray, radius: 20)
            
                Image("mainbloocpic").resizable().aspectRatio(contentMode: .fit).padding()
                 
                Button(action: {
                    IsListOfHospital = true
                }) {
                    Text("List of Hospitals")
                        .font(.headline)
                        .padding()
                        .background(Color.red)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                }.padding()
                    .sheet(isPresented: $IsListOfHospital) {
                        NavigationView {
                            VStack{
                                HospitalListView(selectedHospitals: $selectedhosp).foregroundColor(.red)
                                    .navigationTitle("")
                                    .navigationBarItems(
                                        leading:
                                            Button(action: {
                                                IsListOfHospital = false
                                            }) {
                                                Text("Back").foregroundColor(.black)
                                            }
                                    )
                            }
                        }
                        Button(action: {
                            showHospitalAlert = true

                        }) {
                            Text("Donate")
                                .font(.headline)
                                .padding()
                                .background(Color.red)
                                .foregroundColor(.white)
                                .cornerRadius(10)
                                .fontWeight(.bold)
                        }
                        .padding()
                        .alert(isPresented: $showHospitalAlert){
                            Alert(title: Text(""),
                                  message: Text("Selected Hospital will Contact You Shortly")
                            )
                        
                        }

                    }
                
                
                Button(action: {
                    showprofile = true
                    
                }) {
                    Text("Show Profile")
                        .font(.headline)
                        .padding()
                        .background(Color.red)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                        .fontWeight(.bold)
                    
                }.padding()
               
                NavigationLink("", destination: ProfileView(UserNames: "Mohamed Abdelmohsen", Email: "Abdelmohsen@aucegypt.edu", Phone: "01110966552", Age: 21, Gender: "Male")
                               , isActive: $showprofile)
                    

                
                // Here, you can present the user's profile view
                
                
                
            }
        }
    }
    
}


//struct RequestPage: View{
//    var body : some View
//    {
//        Text("What is Your BloodType?")
//
//
//    }
//}
struct HospitalListView: View {
    @Binding var selectedHospitals: String
    @State var isProfileShown = false
    let Hospitals = ["Dar El-Fouad", "Army Forces Hospital", "Salam Maadi Hospital","Haram Hopital"]
    var body: some View {
        Text("Please Choose a hospital to donate to").font(.title3).foregroundColor(.black).fontWeight(.semibold)
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
    
    var body: some View {
        ScrollView {
            VStack(spacing: 35) {
                Text("Your Profile").padding()
                    .font(.title3)
                    .fontWeight(.bold)
                    .foregroundColor(.black)
                    .frame(maxWidth: .infinity).frame(height: 30).padding()
                    .background(.white)
                    .cornerRadius(30)
                    .shadow(color: .gray, radius: 5, x: 0, y: 5)
                    
                ProfileInfoView(title: "Name:", content: UserNames)
                ProfileInfoView(title: "Email:", content: Email)
                ProfileInfoView(title: "Phone:", content: Phone)
                ProfileInfoView(title: "Age:", content: "\(Age)").fontWeight(.heavy)
                                .navigationBarTitle("") // Clear the title
                                .navigationBarHidden(false)
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
    

