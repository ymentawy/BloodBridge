//
//  Model.swift
//  SWEBloodBridge
//
//  Created by muhammad abdelmohsen on 18/11/2023.
//

import Foundation

struct Users : Identifiable, Codable{
    var id=UUID()
    var Name: String
    var Number: String
    var age: Int
    var gender: String
    var Email: String
    
    static var exampleuser = Users( Name: "Mohamed Abdelmohsen", Number: "01110966552", age:21, gender:"Male", Email: "Abdelmohsen@aucegypt.edu")
    
}
