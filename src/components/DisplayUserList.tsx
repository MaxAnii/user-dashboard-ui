import { Card, CardContent, CardFooter } from "@/components/ui/card";
interface userDataType {
	first_name: string;
	last_name: string;
	username: string;
	age: string;
	marital_status: string;
	is_employed: boolean;
	is_founder: boolean;
}
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import EditUserData from "./EditUserData";
const DisplayUserList = () => {
	const [userData, setUserData] = useState<Array<userDataType>>([]);
	const getUserData = async () => {
		try {
			const response = await fetch(
				"https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e"
			);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setUserData(data);
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getUserData();
	}, []);
	return (
		<div className="flex justify-center flex-wrap gap-x-10 my-5 m-3 ">
			{userData.map((user, index) => {
				let is_employed_className = user.is_employed
					? "bg-green-500"
					: "bg-red-600";
				let is_founder_className = user.is_founder
					? "bg-green-500"
					: "bg-red-600";
				return (
					<Card
						className="md:w-[450px] w-[400px]  my-3 p-4 shadow-xl backdrop-blur-md   bg-gray-100"
						key={index}
						data-aos="zoom-in-up"
					>
						<CardContent>
							<div className="md:flex gap-x-5 justify-center items-center mt-4">
								<div className="text-center">
									<div className="flex justify-center items-center">
										<div className="flex justify-center items-center rounded-full bg-slate-200 w-[80px] h-[80px] shadow-2xl border-2 border-amber-100">
											<div className="text-2xl font-bold">
												{user.first_name[0].toUpperCase() +
													user.last_name[0].toUpperCase()}
											</div>
										</div>
									</div>
									<div className="mt-2 font-medium mb-4 text-gray-400">
										{user.username}
									</div>
								</div>

								<div className="w-full">
									<div className="flex justify-between mb-3">
										<div>
											<div className="font-medium ">First Name</div>
											<div>{user.first_name}</div>
										</div>
										<div>
											<div className="font-medium">Last Name</div>
											<div>{user.last_name}</div>
										</div>
									</div>

									<div className="flex justify-between mb-3">
										<div>
											<div className="font-medium">Marital Status</div>
											<div>{user.marital_status}</div>
										</div>
										<div>
											<div className="font-medium ml-[-60px]">Age</div>
											<div className="ml-[-60px]">{user.age}</div>
										</div>
									</div>

									<div className="flex justify-between mt-4">
										<div className="flex items-center gap-x-2">
											<div className="font-medium">Is Employed</div>
											<div
												className={`${is_employed_className} w-[10px] h-[10px] rounded-full`}
											></div>
										</div>
										<div className="flex items-center gap-x-2">
											<div className="font-medium">Is Founder</div>
											<div
												className={`${is_founder_className} w-[10px] h-[10px] rounded-full`}
											></div>
										</div>
									</div>
								</div>
							</div>
						</CardContent>

						<CardFooter className="flex justify-between mt-4">
							<EditUserData data={{ ...user }}></EditUserData>
							<Button variant="destructive">Delete</Button>
						</CardFooter>
					</Card>
				);
			})}
		</div>
	);
};

export default DisplayUserList;
